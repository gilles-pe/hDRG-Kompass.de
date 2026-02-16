const PRINT_MODE_CLASS = 'print-mode'
const PRINT_ROOT_ID = 'calculator-print-root'
const PRINT_TARGET_CLASS = 'print-target'

export function buildPageLevelUrl() {
  if (typeof window === 'undefined') return ''

  const url = new URL(window.location.href)
  const rawHash = url.hash.replace(/^#/, '')

  if (!rawHash) {
    return url.toString()
  }

  const pageHash = rawHash.split('#')[0] ?? ''
  url.hash = pageHash && pageHash.startsWith('/') ? `#${pageHash}` : ''

  return url.toString()
}

export function buildMailtoUrl(subject: string, body: string, recipient = '') {
  const subjectValue = encodeURIComponent(subject)
  const bodyValue = encodeURIComponent(body)
  const recipientValue = recipient.trim()

  return `mailto:${recipientValue}?subject=${subjectValue}&body=${bodyValue}`
}

export async function copyShareTextToClipboard(text: string) {
  if (typeof navigator === 'undefined') return false

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // Fallback below for restricted clipboard contexts.
    }
  }

  if (typeof document === 'undefined') return false

  try {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', 'true')
    textarea.style.position = 'fixed'
    textarea.style.top = '-1000px'
    textarea.style.left = '-1000px'
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    const copied = document.execCommand('copy')
    document.body.removeChild(textarea)
    return copied
  } catch {
    return false
  }
}

export function printCalculatorElement(elementId: string) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false

  const target = document.getElementById(elementId)
  if (!target) return false

  const body = document.body
  const existingRoot = document.getElementById(PRINT_ROOT_ID)
  if (existingRoot) {
    existingRoot.remove()
  }

  const printRoot = document.createElement('div')
  printRoot.id = PRINT_ROOT_ID
  printRoot.className = 'print-root'

  const clone = target.cloneNode(true) as HTMLElement
  clone.classList.add(PRINT_TARGET_CLASS)

  const sourceFields = target.querySelectorAll('input, select, textarea')
  const cloneFields = clone.querySelectorAll('input, select, textarea')
  sourceFields.forEach((sourceField, index) => {
    const clonedField = cloneFields[index]
    if (!clonedField) return

    if (sourceField instanceof HTMLInputElement && clonedField instanceof HTMLInputElement) {
      if (sourceField.type === 'checkbox' || sourceField.type === 'radio') {
        clonedField.checked = sourceField.checked
      } else {
        clonedField.value = sourceField.value
        clonedField.setAttribute('value', sourceField.value)
      }
      return
    }

    if (sourceField instanceof HTMLTextAreaElement && clonedField instanceof HTMLTextAreaElement) {
      clonedField.value = sourceField.value
      clonedField.textContent = sourceField.value
      return
    }

    if (sourceField instanceof HTMLSelectElement && clonedField instanceof HTMLSelectElement) {
      clonedField.value = sourceField.value
      const optionValues = Array.from(sourceField.options).map((option) => option.selected)
      Array.from(clonedField.options).forEach((option, optionIndex) => {
        option.selected = optionValues[optionIndex] ?? false
      })
    }
  })

  printRoot.appendChild(clone)
  body.appendChild(printRoot)
  body.classList.add(PRINT_MODE_CLASS)

  let cleanedUp = false
  let timeoutId = 0

  const cleanup = () => {
    if (cleanedUp) return
    cleanedUp = true
    window.clearTimeout(timeoutId)
    body.classList.remove(PRINT_MODE_CLASS)
    const activePrintRoot = document.getElementById(PRINT_ROOT_ID)
    if (activePrintRoot) {
      activePrintRoot.remove()
    }
    window.removeEventListener('afterprint', cleanup)
  }

  window.addEventListener('afterprint', cleanup)
  timeoutId = window.setTimeout(cleanup, 60000)

  window.requestAnimationFrame(() => {
    window.print()
  })

  return true
}
