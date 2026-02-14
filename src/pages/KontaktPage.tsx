import { useEffect, useMemo, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'

type ContactFormData = {
  fullName: string
  email: string
  practice: string
  subject: string
  message: string
}

type ContactField = keyof ContactFormData
type ContactFormErrors = Partial<Record<ContactField, string>>

type SubmitStatus = {
  type: 'idle' | 'success' | 'error'
  message: string
}

const MAX_LENGTHS = {
  fullName: 120,
  email: 254,
  practice: 160,
  subject: 140,
  message: 2000,
} as const

const SOURCE_LABELS: Record<string, string> = {
  footer: 'Footer CTA',
  'partner-cta': 'Partner Access CTA',
  'customer-hero': 'Customer Access Hero CTA',
  'customer-cta': 'Customer Access CTA',
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const INITIAL_FORM: ContactFormData = {
  fullName: '',
  email: '',
  practice: '',
  subject: '',
  message: '',
}

function KontaktPage() {
  const location = useLocation()
  const formRef = useRef<HTMLFormElement | null>(null)
  const fullNameRef = useRef<HTMLInputElement | null>(null)
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM)
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({})
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: 'idle', message: '' })
  const [submitAttempted, setSubmitAttempted] = useState(false)

  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search])
  const focusTarget = searchParams.get('focus')
  const source = searchParams.get('source')
  const sourceLabel = source ? SOURCE_LABELS[source] ?? source : null

  const validateField = (field: ContactField, value: string): string | undefined => {
    const trimmedValue = value.trim()

    if (field === 'fullName') {
      if (!trimmedValue) return 'Bitte geben Sie Ihren Namen an.'
      if (trimmedValue.length < 2) return 'Der Name muss mindestens 2 Zeichen enthalten.'
      if (trimmedValue.length > MAX_LENGTHS.fullName) {
        return `Der Name darf maximal ${MAX_LENGTHS.fullName} Zeichen lang sein.`
      }
    }

    if (field === 'email') {
      if (!trimmedValue) return 'Bitte geben Sie Ihre E-Mail-Adresse an.'
      if (trimmedValue.length > MAX_LENGTHS.email) {
        return `Die E-Mail darf maximal ${MAX_LENGTHS.email} Zeichen lang sein.`
      }
      if (!EMAIL_REGEX.test(trimmedValue)) return 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
    }

    if (field === 'practice') {
      if (trimmedValue.length > MAX_LENGTHS.practice) {
        return `Praxis/Einrichtung darf maximal ${MAX_LENGTHS.practice} Zeichen lang sein.`
      }
    }

    if (field === 'subject') {
      if (!trimmedValue) return 'Bitte geben Sie einen Betreff an.'
      if (trimmedValue.length < 2) return 'Der Betreff muss mindestens 2 Zeichen enthalten.'
      if (trimmedValue.length > MAX_LENGTHS.subject) {
        return `Der Betreff darf maximal ${MAX_LENGTHS.subject} Zeichen lang sein.`
      }
    }

    if (field === 'message') {
      if (!trimmedValue) return 'Bitte schreiben Sie eine Nachricht.'
      if (trimmedValue.length < 20) return 'Die Nachricht muss mindestens 20 Zeichen enthalten.'
      if (trimmedValue.length > MAX_LENGTHS.message) {
        return `Die Nachricht darf maximal ${MAX_LENGTHS.message} Zeichen lang sein.`
      }
    }

    return undefined
  }

  const validateAll = (values: ContactFormData): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {}
    const fields = Object.keys(values) as ContactField[]

    fields.forEach((field) => {
      const error = validateField(field, values[field])
      if (error) {
        nextErrors[field] = error
      }
    })

    return nextErrors
  }

  const hasErrors = (nextErrors: ContactFormErrors) => Object.keys(nextErrors).length > 0

  const handleFieldChange = (field: ContactField, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setSubmitStatus({ type: 'idle', message: '' })

    if (touched[field] || submitAttempted) {
      setErrors((current) => ({ ...current, [field]: validateField(field, value) }))
    }
  }

  const handleFieldBlur = (field: ContactField) => {
    setTouched((current) => ({ ...current, [field]: true }))
    setErrors((current) => ({ ...current, [field]: validateField(field, formData[field]) }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitAttempted(true)

    const nextErrors = validateAll(formData)
    setErrors(nextErrors)

    if (hasErrors(nextErrors)) {
      setSubmitStatus({
        type: 'error',
        message: 'Bitte prüfen Sie die markierten Felder und versuchen Sie es erneut.',
      })
      return
    }

    const lines = [
      'Neue Kontaktanfrage über hDRG-Kompass.de',
      '',
      `Name: ${formData.fullName.trim()}`,
      `E-Mail: ${formData.email.trim()}`,
      `Praxis/Einrichtung: ${formData.practice.trim() || 'nicht angegeben'}`,
      `Betreff: ${formData.subject.trim()}`,
      sourceLabel ? `Quelle: ${sourceLabel}` : null,
      '',
      'Nachricht:',
      formData.message.trim(),
    ].filter(Boolean)

    const subject = `Kontaktanfrage hDRG-Kompass: ${formData.subject.trim()}`
    const body = lines.join('\n')
    const mailtoUrl = `mailto:info@hdrg-kompass.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    const mailLink = document.createElement('a')
    mailLink.href = mailtoUrl
    mailLink.target = '_blank'
    mailLink.rel = 'noopener noreferrer'
    document.body.appendChild(mailLink)
    mailLink.click()
    document.body.removeChild(mailLink)

    setFormData(INITIAL_FORM)
    setTouched({})
    setErrors({})
    setSubmitAttempted(false)
    setSubmitStatus({
      type: 'success',
      message: 'Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die vorbereitete Nachricht ab.',
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (focusTarget !== 'form') {
      return
    }

    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const timerId = window.setTimeout(() => {
      fullNameRef.current?.focus()
    }, 180)

    return () => {
      window.clearTimeout(timerId)
    }
  }, [focusTarget])

  return (
    <div className="page">
      <section className="section">
        <div className="container narrow">
          <h1>Kontakt</h1>
          <p>
            Sie haben Fragen zu Hybrid-DRG oder möchten Inhalte ergänzen? Schreiben Sie uns gerne.
          </p>
          <form className="form" id="kontakt-form" ref={formRef} onSubmit={handleSubmit} noValidate>
            {submitStatus.type !== 'idle' ? (
              <div
                className={`form-status ${
                  submitStatus.type === 'success' ? 'form-status-success' : 'form-status-error'
                }`}
                aria-live="polite"
              >
                {submitStatus.message}
              </div>
            ) : null}
            <label className="field" htmlFor="kontakt-full-name">
              <span>Name</span>
              <input
                id="kontakt-full-name"
                ref={fullNameRef}
                type="text"
                name="fullName"
                autoComplete="name"
                placeholder="Ihr Name"
                value={formData.fullName}
                onChange={(event) => handleFieldChange('fullName', event.target.value)}
                onBlur={() => handleFieldBlur('fullName')}
                maxLength={MAX_LENGTHS.fullName}
                required
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'kontakt-full-name-error' : undefined}
              />
              {errors.fullName ? (
                <small className="field-error" id="kontakt-full-name-error">
                  {errors.fullName}
                </small>
              ) : null}
            </label>
            <label className="field" htmlFor="kontakt-email">
              <span>E-Mail</span>
              <input
                id="kontakt-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="name@praxis.de"
                value={formData.email}
                onChange={(event) => handleFieldChange('email', event.target.value)}
                onBlur={() => handleFieldBlur('email')}
                maxLength={MAX_LENGTHS.email}
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'kontakt-email-error' : undefined}
              />
              {errors.email ? (
                <small className="field-error" id="kontakt-email-error">
                  {errors.email}
                </small>
              ) : null}
            </label>
            <label className="field" htmlFor="kontakt-practice">
              <span>Praxis/Einrichtung (optional)</span>
              <input
                id="kontakt-practice"
                type="text"
                name="practice"
                autoComplete="organization"
                placeholder="Name Ihrer Praxis oder Einrichtung"
                value={formData.practice}
                onChange={(event) => handleFieldChange('practice', event.target.value)}
                onBlur={() => handleFieldBlur('practice')}
                maxLength={MAX_LENGTHS.practice}
                aria-invalid={Boolean(errors.practice)}
                aria-describedby={errors.practice ? 'kontakt-practice-error' : 'kontakt-practice-hint'}
              />
              {errors.practice ? (
                <small className="field-error" id="kontakt-practice-error">
                  {errors.practice}
                </small>
              ) : (
                <small className="field-hint" id="kontakt-practice-hint">
                  Hilft uns, Ihre Anfrage schneller einzuordnen.
                </small>
              )}
            </label>
            <label className="field" htmlFor="kontakt-subject">
              <span>Betreff</span>
              <input
                id="kontakt-subject"
                type="text"
                name="subject"
                autoComplete="off"
                placeholder="Worum geht es?"
                value={formData.subject}
                onChange={(event) => handleFieldChange('subject', event.target.value)}
                onBlur={() => handleFieldBlur('subject')}
                maxLength={MAX_LENGTHS.subject}
                required
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'kontakt-subject-error' : undefined}
              />
              {errors.subject ? (
                <small className="field-error" id="kontakt-subject-error">
                  {errors.subject}
                </small>
              ) : null}
            </label>
            <label className="field" htmlFor="kontakt-message">
              <span>Nachricht</span>
              <textarea
                id="kontakt-message"
                rows={6}
                name="message"
                autoComplete="off"
                placeholder="Ihre Nachricht"
                value={formData.message}
                onChange={(event) => handleFieldChange('message', event.target.value)}
                onBlur={() => handleFieldBlur('message')}
                minLength={20}
                maxLength={MAX_LENGTHS.message}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'kontakt-message-error' : 'kontakt-message-hint'}
              />
              {errors.message ? (
                <small className="field-error" id="kontakt-message-error">
                  {errors.message}
                </small>
              ) : (
                <small className="field-hint" id="kontakt-message-hint">
                  Mindestens 20 Zeichen ({formData.message.length}/{MAX_LENGTHS.message}).
                </small>
              )}
            </label>
            <button className="button primary" type="submit">
              Nachricht senden
            </button>
          </form>
          <div className="partner-access-link">
            <Link to="/customer-access">Customer Access</Link>
          </div>
          <div className="partner-access-link">
            <Link to="/partner-access">Partner Access</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KontaktPage
