import { useMemo, useState } from 'react'
import type { HybridDrgProcedure } from '../data/hybridDrgProcedures'

type HybridDrgCalculatorProps = {
  procedures: HybridDrgProcedure[]
  defaultOpsPerWeek?: number
  defaultWeeksPerYear?: number
}

const currencyFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
})

function formatCurrency(value: number) {
  return currencyFormatter.format(value)
}

function HybridDrgCalculator({
  procedures,
  defaultOpsPerWeek = 8,
  defaultWeeksPerYear = 46,
}: HybridDrgCalculatorProps) {
  const [selectedKey, setSelectedKey] = useState(
    procedures[0] ? `${procedures[0].year}-${procedures[0].id}` : ''
  )
  const [opsPerWeek, setOpsPerWeek] = useState(defaultOpsPerWeek)
  const [weeksPerYear, setWeeksPerYear] = useState(defaultWeeksPerYear)

  const selectedProcedure = useMemo(
    () =>
      procedures.find((procedure) => `${procedure.year}-${procedure.id}` === selectedKey) ??
      procedures[0] ??
      null,
    [procedures, selectedKey]
  )
  const selectedProcedureKey = selectedProcedure
    ? `${selectedProcedure.year}-${selectedProcedure.id}`
    : ''

  if (!procedures.length || !selectedProcedure) {
    return (
      <div className="hybrid-calc">
        <h4 className="hybrid-calc-title">Hybrid-DRG-Rechner 2025/2026</h4>
        <div className="hybrid-calc-empty">
          Für diesen Fachbereich liegen aktuell keine Hybrid-DRG-Codes vor.
        </div>
      </div>
    )
  }

  const annualCases = opsPerWeek * weeksPerYear
  const totalRevenue = selectedProcedure.base_price * annualCases
  const restrictions = selectedProcedure.restrictions?.trim() || 'laut Katalog prüfen'
  const description = selectedProcedure.description?.trim()

  return (
    <div className="hybrid-calc">
      <h4 className="hybrid-calc-title">Hybrid-DRG-Rechner 2025/2026</h4>
      <div className="hybrid-calc-grid">
        <label className="field hybrid-calc-select">
          <span>Eingriff auswählen</span>
          <select
            value={selectedProcedureKey}
            onChange={(event) => setSelectedKey(event.target.value)}
          >
            {procedures.map((procedure) => (
              <option
                key={`${procedure.year}-${procedure.id}`}
                value={`${procedure.year}-${procedure.id}`}
              >
                {`${procedure.year} · ${procedure.id} – ${procedure.title} – ${formatCurrency(
                  procedure.base_price
                )}`}
              </option>
            ))}
          </select>
        </label>
        <label className="slider-field">
          <span className="slider-label">
            OPs pro Woche
            <span className="slider-value">{opsPerWeek}</span>
          </span>
          <input
            type="range"
            min={1}
            max={40}
            value={opsPerWeek}
            onChange={(event) => setOpsPerWeek(Number(event.target.value))}
          />
          <span className="slider-hint">
            <span>1</span>
            <span>{opsPerWeek}</span>
            <span>40</span>
          </span>
        </label>
        <label className="slider-field">
          <span className="slider-label">
            Wochen pro Jahr
            <span className="slider-value">{weeksPerYear}</span>
          </span>
          <input
            type="range"
            min={20}
            max={52}
            value={weeksPerYear}
            onChange={(event) => setWeeksPerYear(Number(event.target.value))}
          />
          <span className="slider-hint">
            <span>20</span>
            <span>{weeksPerYear}</span>
            <span>52</span>
          </span>
        </label>
      </div>

      <div className="result-card">
        <div className="result-header">
          <div>
            <div className="procedure-code">{selectedProcedure.id}</div>
            <h4>{selectedProcedure.title}</h4>
            {description ? <p className="procedure-description">{description}</p> : null}
          </div>
          <span
            className={`restriction-badge restriction-badge--${selectedProcedure.disclaimer_key}`}
          >
            Voraussetzung: {restrictions}
          </span>
        </div>

        <div className="price-row">
          <div className="price-card">
            <span className="price-label">Gesamtbetrag pro Jahr</span>
            <div className="price-value">
              {formatCurrency(totalRevenue)}
              <span className="price-asterisk">*</span>
            </div>
          </div>
          <div className="price-card">
            <span className="price-label">Basis-Erlös pro Fall</span>
            <div className="price-value price-value--secondary">
              {formatCurrency(selectedProcedure.base_price)}
            </div>
          </div>
        </div>

        <div className="result-formula">
          Formel: OPs/Woche × Wochen/Jahr × Basis-Erlös pro Fall
        </div>

        <div className="card-footer-disclaimer">
          Basis-Erlös (Stand 2026) als Orientierungswert. Der tatsächlich erzielbare Erlös variiert
          in Abhängigkeit von Schweregrad (CC), Patientenalter, Begleiterkrankungen sowie möglicher
          Hybrid-DRG-Zuordnung und Abrechnungsbesonderheiten. Abweichungen und Abrechnungsfehler sind
          möglich.
        </div>
      </div>
    </div>
  )
}

export default HybridDrgCalculator
