import { useId, useMemo, useState } from 'react'
import CalculatorShareActions from './CalculatorShareActions'
import type { HybridDrgProcedure } from '../data/hybridDrgProcedures'
import { buildPageLevelUrl } from '../utils/calculatorShare'

type HybridDrgCalculatorProps = {
  procedures: HybridDrgProcedure[]
  defaultOpsPerWeek?: number
  defaultWeeksPerYear?: number
  calculatorId?: string
  calculatorLabel?: string
}

const currencyFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
})
const dateTimeFormatter = new Intl.DateTimeFormat('de-DE', {
  dateStyle: 'medium',
  timeStyle: 'short',
})
const FORMULA_TEXT = 'OPs/Woche × Wochen/Jahr × Basis-Erlös pro Fall'
const BASE_DISCLAIMER_TEXT =
  'Basis-Erlös (Stand 2026) als Orientierungswert. Der tatsächlich erzielbare Erlös variiert in Abhängigkeit von Schweregrad (CC), Patientenalter, Begleiterkrankungen sowie möglicher Hybrid-DRG-Zuordnung und Abrechnungsbesonderheiten. Abweichungen und Abrechnungsfehler sind möglich.'

function formatCurrency(value: number) {
  return currencyFormatter.format(value)
}

function sanitizeIdentifier(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function HybridDrgCalculator({
  procedures,
  defaultOpsPerWeek = 8,
  defaultWeeksPerYear = 40,
  calculatorId,
  calculatorLabel,
}: HybridDrgCalculatorProps) {
  const reactId = useId()
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
  const sanitizedCalculatorId = sanitizeIdentifier(calculatorId || reactId) || 'hybrid-calc'
  const printTargetId = `hybrid-calc-${sanitizedCalculatorId}`
  const calculatorName = calculatorLabel?.trim() || 'Hybrid-DRG-Rechner 2025/2026'
  const pageLevelUrl = buildPageLevelUrl() || 'nicht verfügbar'

  return (
    <div className="hybrid-calc" id={printTargetId}>
      <div className="hybrid-calc-head">
        <h4 className="hybrid-calc-title">Hybrid-DRG-Rechner 2025/2026</h4>
        <CalculatorShareActions
          printTargetId={printTargetId}
          buildMailPayload={() => {
            const subject = `hDRG-Kompass.de | Berechnung teilen | ${calculatorName}`
            const bodyLines = [
              'Guten Tag,',
              '',
              'anbei die aktuelle Berechnung aus dem hDRG-Kompass zur gemeinsamen Abstimmung.',
              '',
              'RECHNER',
              `- ${calculatorName}`,
              `- Zeitpunkt: ${dateTimeFormatter.format(new Date())}`,
              '',
              'EINGRIFF',
              `- ${selectedProcedure.year} · ${selectedProcedure.id} – ${selectedProcedure.title}`,
              `- Beschreibung: ${description || 'keine Zusatzbeschreibung'}`,
              `- Voraussetzungen: ${restrictions}`,
              '',
              'BERECHNUNG',
              `- OPs pro Woche: ${opsPerWeek}`,
              `- Wochen pro Jahr: ${weeksPerYear}`,
              `- Fälle pro Jahr: ${annualCases}`,
              `- Basis-Erlös pro Fall: ${formatCurrency(selectedProcedure.base_price)}`,
              `- Gesamtbetrag pro Jahr: ${formatCurrency(totalRevenue)}`,
              `- Formel: ${FORMULA_TEXT}`,
              '',
              'QUELLE',
              '- Website: hDRG-Kompass.de',
              `- Rechner-Link: ${pageLevelUrl}`,
              '',
              'HINWEIS',
              `- ${BASE_DISCLAIMER_TEXT}`,
              '',
              'Viele Grüße',
            ]

            return { subject, body: bodyLines.join('\n') }
          }}
        />
      </div>
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
            <span>20</span>
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
            min={1}
            max={52}
            value={weeksPerYear}
            onChange={(event) => setWeeksPerYear(Number(event.target.value))}
          />
          <span className="slider-hint">
            <span>1</span>
            <span>26</span>
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
          Formel: {FORMULA_TEXT}
        </div>

        <div className="card-footer-disclaimer">
          {BASE_DISCLAIMER_TEXT}
        </div>
      </div>
    </div>
  )
}

export default HybridDrgCalculator
