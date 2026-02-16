import { useId, useMemo, useState } from 'react'
import CalculatorShareActions from './CalculatorShareActions'
import { buildPageLevelUrl } from '../utils/calculatorShare'

function formatNumber(value: number) {
  return new Intl.NumberFormat('de-DE').format(Math.round(value))
}

const currencyFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
})
const dateTimeFormatter = new Intl.DateTimeFormat('de-DE', {
  dateStyle: 'medium',
  timeStyle: 'short',
})
const FORMULA_TEXT = 'OPs/Woche × Wochen/Jahr × Pauschale je Fall'

function RevenueCalculator() {
  const reactId = useId()
  const [opsPerWeek, setOpsPerWeek] = useState('')
  const [weeksPerYear, setWeeksPerYear] = useState('40')
  const [feePerCase, setFeePerCase] = useState('')

  const result = useMemo(() => {
    const ops = Number(opsPerWeek)
    const weeks = Number(weeksPerYear)
    const fee = Number(feePerCase)
    if (!ops || !weeks || !fee) return null
    if (ops < 0 || weeks < 0 || fee < 0) return null
    return ops * weeks * fee
  }, [opsPerWeek, weeksPerYear, feePerCase])
  const printTargetId = `revenue-calc-${reactId.replace(/[^a-zA-Z0-9_-]+/g, '')}`
  const pageLevelUrl = buildPageLevelUrl() || 'nicht verfügbar'

  return (
    <section className="calculator" id={printTargetId}>
      <div className="calculator-header">
        <h2>Jahres-Mehrumsatz durch Hybrid-DRG</h2>
        <p>Schätzung auf Basis Ihrer Fallzahl und Pauschale je Eingriff. Kein Profit, nur zusätzlicher Umsatz.</p>
      </div>
      <CalculatorShareActions
        printTargetId={printTargetId}
        buildMailPayload={() => {
          const subject = 'hDRG-Kompass.de | Berechnung teilen | Jahres-Mehrumsatz-Rechner'
          const bodyLines = [
            'Guten Tag,',
            '',
            'anbei die aktuelle Berechnung aus dem hDRG-Kompass zur gemeinsamen Abstimmung.',
            '',
            'RECHNER',
            '- Jahres-Mehrumsatz durch Hybrid-DRG',
            `- Zeitpunkt: ${dateTimeFormatter.format(new Date())}`,
            '',
            'BERECHNUNG',
            `- OPs pro Woche: ${opsPerWeek || 'nicht gesetzt'}`,
            `- Wochen pro Jahr: ${weeksPerYear || 'nicht gesetzt'}`,
            `- Pauschale je Fall: ${
              feePerCase ? currencyFormatter.format(Number(feePerCase)) : 'nicht gesetzt'
            }`,
            `- Mehrumsatz pro Jahr: ${result ? currencyFormatter.format(result) : 'nicht berechnet'}`,
            `- Formel: ${FORMULA_TEXT}`,
            '',
            'QUELLE',
            '- Website: hDRG-Kompass.de',
            `- Rechner-Link: ${pageLevelUrl}`,
            '',
            'HINWEIS',
            '- Schätzung auf Basis Ihrer Fallzahl und Pauschale je Eingriff. Kein Profit, nur zusätzlicher Umsatz.',
            '',
            'Viele Grüße',
          ]

          return { subject, body: bodyLines.join('\n') }
        }}
      />
      <div className="calculator-grid">
        <label className="field">
          <span>OPs pro Woche</span>
          <input
            inputMode="numeric"
            min="0"
            type="number"
            value={opsPerWeek}
            onChange={(event) => setOpsPerWeek(event.target.value)}
            placeholder="z.B. 8"
          />
        </label>
        <label className="field">
          <span>Wochen pro Jahr</span>
          <input
            inputMode="numeric"
            min="1"
            type="number"
            value={weeksPerYear}
            onChange={(event) => setWeeksPerYear(event.target.value)}
            placeholder="z.B. 40"
          />
        </label>
        <label className="field">
          <span>Pauschale je Fall (EUR)</span>
          <input
            inputMode="numeric"
            min="0"
            type="number"
            value={feePerCase}
            onChange={(event) => setFeePerCase(event.target.value)}
            placeholder="z.B. 2.400"
          />
        </label>
        <div className="calculator-result">
          <span>Mehrumsatz pro Jahr</span>
          <strong>{result ? `${formatNumber(result)} EUR` : '—'}</strong>
          <small>Formel: {FORMULA_TEXT}</small>
        </div>
      </div>
    </section>
  )
}

export default RevenueCalculator
