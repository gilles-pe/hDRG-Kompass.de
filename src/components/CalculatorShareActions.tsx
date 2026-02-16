import { useState } from 'react'
import {
  buildMailtoUrl,
  copyShareTextToClipboard,
  printCalculatorElement,
} from '../utils/calculatorShare'

type MailPayload = {
  subject: string
  body: string
}

type StatusTone = 'success' | 'error' | 'info'

type CalculatorShareActionsProps = {
  printTargetId: string
  buildMailPayload: () => MailPayload
}

function PrintIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M7 3h10v4H7V3Zm-2 6h14a3 3 0 0 1 3 3v4h-3v5H5v-5H2v-4a3 3 0 0 1 3-3Zm2 10h10v-6H7v6Zm10-8h2v2h-2v-2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M3 6h18a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1Zm0 2v.5l9 5.6 9-5.6V8l-9 5.6L3 8.1Zm18 2.2-8.5 5.3a1 1 0 0 1-1 0L3 10.2V17h18v-6.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

function openMailClient(mailtoUrl: string) {
  const mailLink = document.createElement('a')
  mailLink.href = mailtoUrl
  mailLink.target = '_blank'
  mailLink.rel = 'noopener noreferrer'
  document.body.appendChild(mailLink)
  mailLink.click()
  document.body.removeChild(mailLink)
}

function CalculatorShareActions({ printTargetId, buildMailPayload }: CalculatorShareActionsProps) {
  const [status, setStatus] = useState<{ tone: StatusTone; message: string } | null>(null)

  const handlePrint = () => {
    const opened = printCalculatorElement(printTargetId)
    if (!opened) {
      setStatus({
        tone: 'error',
        message: 'Druckansicht konnte nicht geöffnet werden. Bitte Seite neu laden.',
      })
      return
    }

    setStatus({
      tone: 'info',
      message: 'Druckansicht wurde geöffnet.',
    })
  }

  const handleMail = async () => {
    const payload = buildMailPayload()
    const copyText = `Betreff: ${payload.subject}\n\n${payload.body}`
    const copied = await copyShareTextToClipboard(copyText)
    const mailtoUrl = buildMailtoUrl(payload.subject, payload.body)
    openMailClient(mailtoUrl)

    setStatus({
      tone: copied ? 'success' : 'info',
      message: copied
        ? 'E-Mail vorbereitet. Inhalt wurde zusätzlich in die Zwischenablage kopiert.'
        : 'E-Mail vorbereitet. Falls kein Mailprogramm öffnet, bitte manuell kopieren.',
    })
  }

  return (
    <div className="calculator-actions">
      <div className="calculator-actions-buttons">
        <button
          className="calculator-action-btn icon-only"
          type="button"
          onClick={handlePrint}
          aria-label="Berechnung drucken"
          title="Drucken"
        >
          <PrintIcon />
        </button>
        <button
          className="calculator-action-btn icon-only"
          type="button"
          onClick={handleMail}
          aria-label="Berechnung per E-Mail teilen"
          title="E-Mail"
        >
          <MailIcon />
        </button>
      </div>
      {status ? (
        <span className={`calculator-action-status is-${status.tone}`} aria-live="polite">
          {status.message}
        </span>
      ) : null}
    </div>
  )
}

export default CalculatorShareActions
