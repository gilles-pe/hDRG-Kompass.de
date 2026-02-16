import { useEffect, useState, type ReactNode } from 'react'

export type AccordionItem = {
  id?: string
  title: string
  subtitle?: string
  content: ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
}

function getHashTarget() {
  if (typeof window === 'undefined') return ''

  const hashParts = window.location.hash.split('#').filter(Boolean)
  if (!hashParts.length) return ''

  const candidate = decodeURIComponent(hashParts[hashParts.length - 1] ?? '')
  if (!candidate || candidate.startsWith('/')) return ''

  return candidate
}

function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const openFromHash = () => {
      const hash = getHashTarget()
      if (!hash) return
      const index = items.findIndex((item) => item.id === hash)
      if (index >= 0) {
        setOpenIndex(index)
        requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'auto', block: 'start' })
        })
      }
    }

    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [items])

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={item.title}
            id={item.id}
            className={`accordion-item ${isOpen ? 'is-open' : ''}`}
          >
            <button
              className="accordion-header"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${item.id ?? item.title}-panel`}
            >
              <div>
                <div className="accordion-title">{item.title}</div>
                {item.subtitle ? <div className="accordion-subtitle">{item.subtitle}</div> : null}
              </div>
              <span className="accordion-icon">{isOpen ? '–' : '+'}</span>
            </button>
            <div
              className="accordion-panel"
              id={`${item.id ?? item.title}-panel`}
              aria-hidden={!isOpen}
            >
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
