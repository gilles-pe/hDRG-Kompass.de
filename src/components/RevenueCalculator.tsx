import { useMemo, useState } from 'react'

function formatNumber(value: number) {
  return new Intl.NumberFormat('de-DE').format(Math.round(value))
}

function RevenueCalculator() {
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

  return (
    <section className="calculator">
      <div className="calculator-header">
        <h2>Jahres-Mehrumsatz durch Hybrid-DRG</h2>
        <p>Schätzung auf Basis Ihrer Fallzahl und Pauschale je Eingriff. Kein Profit, nur zusätzlicher Umsatz.</p>
      </div>
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
          <small>Formel: OPs/Woche × Wochen/Jahr × Pauschale je Fall</small>
        </div>
      </div>
    </section>
  )
}

export default RevenueCalculator
