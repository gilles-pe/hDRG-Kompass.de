import { useEffect, useState } from 'react'

const DISMISS_KEY = 'hdrg_announce_banner_dismissed'
const DISMISS_DURATION_MS = 5 * 24 * 60 * 60 * 1000

function AnnouncementBanner() {
  if (typeof window === 'undefined') {
    return null
  }

  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const dismissedValue = window.localStorage.getItem(DISMISS_KEY)
    if (!dismissedValue) return

    const dismissedAt = Number(dismissedValue)
    if (Number.isFinite(dismissedAt)) {
      if (Date.now() - dismissedAt < DISMISS_DURATION_MS) {
        setIsVisible(false)
        return
      }
      window.localStorage.removeItem(DISMISS_KEY)
      return
    }

    if (dismissedValue === '1') {
      // Legacy value from older behavior: allow banner to show again.
      window.localStorage.removeItem(DISMISS_KEY)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="announce-banner" data-announce-banner>
      <div className="announce-banner__text">
        <span>
          Deine Expertise hilft doppelt: Wir spenden an ein Kinderhospiz für jede Teilnahme an unserer
          Studie zur HDRG-Vorbereitung in Praxen.
        </span>
        <a
          className="announce-banner__cta"
          href="https://form.typeform.com/to/WTmiFoUU"
          target="_blank"
          rel="noreferrer"
        >
          Jetzt teilnehmen
        </a>
      </div>
      <button
        className="announce-banner__close"
        type="button"
        aria-label="Banner schließen"
        onClick={() => {
          setIsVisible(false)
          window.localStorage.setItem(DISMISS_KEY, String(Date.now()))
        }}
      >
        &times;
      </button>
    </div>
  )
}

export default AnnouncementBanner
