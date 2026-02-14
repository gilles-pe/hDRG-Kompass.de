import { useEffect, useRef, useState } from 'react'
import {
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  Chart,
  LinearScale,
  Legend,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import type { Plugin } from 'chart.js'
import { Link } from 'react-router-dom'

Chart.register(
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  LinearScale,
  Legend,
  LineController,
  LineElement,
  PointElement,
  Tooltip
)

type FlowIconType = 'supplier' | 'platform' | 'practice'

function FlowIcon({ type }: { type: FlowIconType }) {
  if (type === 'supplier') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 21h18M4 21V9l8-4 8 4v12" />
        <path d="M9 21v-4h6v4M8 12h2M12 12h2M16 12h2M8 15h2M12 15h2M16 15h2" />
      </svg>
    )
  }

  if (type === 'platform') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M6 7.5h12M6 16.5h12" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M8 20v-4h8v4M8 8h2M12 8h2M16 8h0M8 12h2M12 12h2M16 12h0" />
    </svg>
  )
}

function PartnerAccessPage() {
  const marketShiftRef = useRef<HTMLCanvasElement | null>(null)
  const fragmentationRef = useRef<HTMLCanvasElement | null>(null)
  const costRef = useRef<HTMLCanvasElement | null>(null)
  const capacityRef = useRef<HTMLCanvasElement | null>(null)
  const catalogRef = useRef<HTMLCanvasElement | null>(null)
  const [isDocEaseOpen, setIsDocEaseOpen] = useState(false)
  const heroImageUrl = `${import.meta.env.BASE_URL}Arzthelferin_Rezeption.jpg`
  const docEaseTeaserUrl = `${import.meta.env.BASE_URL}DocEaseTeaser.jpg`

  useEffect(() => {
    document.body.classList.add('partner-access-bg')
    const charts: Chart[] = []
    const fragmentationHighlightPlugin: Plugin<'bubble'> = {
      id: 'fragmentationHighlight',
      afterDatasetsDraw: (chart) => {
        const xScale = chart.scales.x
        const yScale = chart.scales.y
        if (!xScale || !yScale) return

        const topLeftX = xScale.getPixelForValue(11)
        const topLeftY = yScale.getPixelForValue(88)
        const bottomRightX = xScale.getPixelForValue(76)
        const bottomRightY = yScale.getPixelForValue(21)
        const topLeftRadius = Math.min(Math.abs(xScale.getPixelForValue(22) - topLeftX), 60)
        const bottomRightRadius = Math.min(Math.abs(xScale.getPixelForValue(95) - bottomRightX), 110)

        const { ctx } = chart
        const { left, right, top, bottom } = chart.chartArea
        ctx.save()
        ctx.strokeStyle = 'rgba(15, 93, 100, 0.28)'
        ctx.lineWidth = 1.25
        ctx.setLineDash([4, 6])

        ctx.beginPath()
        ctx.arc(topLeftX, topLeftY, topLeftRadius, 0, Math.PI * 2)
        ctx.stroke()

        ctx.strokeStyle = 'rgba(245, 165, 36, 0.55)'
        ctx.beginPath()
        ctx.arc(bottomRightX, bottomRightY, bottomRightRadius, 0, Math.PI * 2)
        ctx.stroke()

        ctx.setLineDash([])
        ctx.font = "600 13px 'Poppins', sans-serif"
        ctx.textAlign = 'left'

        const topLeftLabel = 'Klinikvertrieb'
        const bottomRightLabel = 'Sanoom Plattform Access'
        const padX = 6

        const topLeftTextX = Math.min(right - 120, topLeftX + topLeftRadius + 24)
        const topLeftTextY = Math.max(top + 18, topLeftY - topLeftRadius + 8)
        const topLeftWidth = ctx.measureText(topLeftLabel).width
        ctx.fillStyle = 'rgba(255, 255, 255, 0.68)'
        ctx.fillRect(topLeftTextX - padX, topLeftTextY - 12, topLeftWidth + padX * 2, 18)
        ctx.fillStyle = 'rgba(15, 93, 100, 0.85)'
        ctx.fillText(topLeftLabel, topLeftTextX, topLeftTextY)

        const bottomRightWidth = ctx.measureText(bottomRightLabel).width
        const bottomRightTextX = Math.max(left + 6, bottomRightX - bottomRightRadius - bottomRightWidth - 12)
        const bottomRightTextY = Math.min(bottom - 8, bottomRightY + 6)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.68)'
        ctx.fillRect(
          bottomRightTextX - padX,
          bottomRightTextY - 12,
          bottomRightWidth + padX * 2,
          18
        )
        ctx.fillStyle = 'rgba(245, 165, 36, 0.95)'
        ctx.fillText(bottomRightLabel, bottomRightTextX, bottomRightTextY)

        chart.data.datasets.forEach((dataset, datasetIndex) => {
          const meta = chart.getDatasetMeta(datasetIndex)
          const dataPoints = dataset.data as Array<{ label?: string }>
          const isClinicDataset = datasetIndex === 0

          ctx.font = "500 10px 'Poppins', sans-serif"
          ctx.fillStyle = isClinicDataset ? 'rgba(15, 93, 100, 0.82)' : 'rgba(158, 100, 9, 0.8)'

          meta.data.forEach((point, pointIndex) => {
            const pointLabel = dataPoints[pointIndex]?.label
            if (!pointLabel) return

            const shiftX = isClinicDataset ? 14 : 8
            const shiftY = isClinicDataset ? -8 : -5
            const textX = Math.min(right - 4, Math.max(left + 4, point.x + shiftX))
            const textY = Math.min(bottom - 4, Math.max(top + 10, point.y + shiftY))
            ctx.fillText(pointLabel, textX, textY)
          })
        })
        ctx.restore()
      },
    }

    if (marketShiftRef.current) {
      charts.push(
        new Chart(marketShiftRef.current, {
          type: 'bar',
          data: {
            labels: ['Referenzmarkt (CH)', 'Ambulante hDRG-Verschiebung'],
            datasets: [
              {
                label: 'Eingriffe (in Mio.)',
                data: [2.1, 2.0],
                backgroundColor: ['rgba(148, 163, 184, 0.8)', 'rgba(15, 93, 100, 0.9)'],
                borderRadius: 8,
                barPercentage: 0.6,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
            },
            scales: {
              y: {
                beginAtZero: true,
                title: { display: true, text: 'Volumen (Mio.)' },
              },
            },
          },
        })
      )
    }

    if (fragmentationRef.current) {
      charts.push(
        new Chart(fragmentationRef.current, {
          type: 'bubble',
          plugins: [fragmentationHighlightPlugin],
          data: {
            datasets: [
              {
                label: 'Kliniken',
                data: [
                  { x: 10, y: 90, r: 28, label: 'Uniklinik' },
                  { x: 14, y: 82, r: 24, label: 'Katholisches Krankenhaus' },
                  { x: 8, y: 96, r: 26, label: 'Staedtisches Krankenhaus' },
                ],
                backgroundColor: 'rgba(15, 93, 100, 0.75)',
              },
              {
                label: 'Praxen',
                data: [
                  { x: 60, y: 20, r: 5, label: 'Uro Klinik' },
                  { x: 66, y: 24, r: 4, label: 'MVZ am Marktplatz' },
                  { x: 70, y: 15, r: 6, label: 'Chirurgie West' },
                  { x: 82, y: 30, r: 5, label: 'Orthozentrum Sued' },
                  { x: 55, y: 12, r: 4, label: 'Praxis am Ring' },
                  { x: 75, y: 22, r: 5, label: 'HNO Forum Mitte' },
                  { x: 88, y: 18, r: 4, label: 'MVZ Stadtpark' },
                  { x: 92, y: 12, r: 5, label: 'Tagesklinik Ost' },
                  { x: 62, y: 34, r: 6, label: 'Zentrum Nord' },
                ],
                backgroundColor: 'rgba(245, 165, 36, 0.65)',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'bottom' },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const point = context.raw as { label?: string }
                    if (point?.label) return point.label
                    return context.dataset.label || ''
                  },
                },
              },
            },
            scales: {
              x: {
                title: { display: true, text: 'Anzahl der Accounts' },
                min: 0,
                max: 100,
                grid: { display: false },
              },
              y: {
                title: { display: true, text: 'Volumen je Account' },
                min: 0,
                max: 100,
                grid: { display: false },
              },
            },
          },
        })
      )
    }

    if (costRef.current) {
      charts.push(
        new Chart(costRef.current, {
          type: 'bar',
          data: {
            labels: ['Logistik', 'Vertrieb', 'Akquise', 'Admin/Overhead'],
            datasets: [
              {
                label: 'Direktvertrieb',
                data: [85, 90, 95, 70],
                backgroundColor: 'rgba(15, 93, 100, 0.85)',
                borderRadius: 6,
              },
              {
                label: 'Sanoom Plattform Access',
                data: [20, 15, 25, 10],
                backgroundColor: 'rgba(245, 165, 36, 0.75)',
                borderRadius: 6,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'top' },
            },
            scales: {
              y: {
                beginAtZero: true,
                title: { display: true, text: 'Kostenindex (normiert)' },
              },
            },
          },
        })
      )
    }

    if (capacityRef.current) {
      charts.push(
        new Chart(capacityRef.current, {
          type: 'bar',
          data: {
            labels: ['2026', '2027', '2028', '2029', '2030'],
            datasets: [
              {
                label: 'Standardkapazität',
                data: [100, 105, 110, 112, 115],
                backgroundColor: 'rgba(148, 163, 184, 0.8)',
              },
              {
                label: 'Zusätzliche Kapazität durch Enablement',
                data: [10, 30, 60, 90, 120],
                backgroundColor: 'rgba(42, 169, 160, 0.85)',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'bottom' },
              title: { display: true, text: 'Potenzial pro Praxis (Index)' },
            },
            scales: {
              x: { stacked: true },
              y: {
                stacked: true,
                title: { display: true, text: 'Eingriffe pro Praxis (Index)' },
              },
            },
          },
        })
      )
    }

    if (catalogRef.current) {
      charts.push(
        new Chart(catalogRef.current, {
          type: 'bar',
          data: {
            labels: ['2024', '2025', '2026'],
            datasets: [
              {
                label: 'Hybrid-DRG-Codes',
                data: [12, 34, 103],
                backgroundColor: ['rgba(148, 163, 184, 0.7)', 'rgba(42, 169, 160, 0.75)', 'rgba(15, 93, 100, 0.9)'],
                borderRadius: 6,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: { stepSize: 20 },
              },
            },
          },
        })
      )
    }

    return () => {
      charts.forEach((chart) => chart.destroy())
      document.body.classList.remove('partner-access-bg')
    }
  }, [])

  return (
    <div className="page partner-access partner-access-page">
      <header className="partner-hero">
        <div
          className="partner-hero-media"
          role="img"
          aria-label="Arzthelferin an der Rezeption"
          style={{
            backgroundImage: `url('${heroImageUrl}')`,
          }}
        />
        <div className="partner-hero-overlay" />
        <div className="container partner-hero-content">
          <span className="eyebrow">Partner Access</span>
          <h1>
            Strategischer Zugang zum <span className="partner-hero-market">ambulanten Markt</span>
            <br />
            <span className="partner-hero-hybrid">für Hybrid-DRG</span>
          </h1>
          <p className="hero-lead">
            Der ambulante Markt verschiebt sich strukturell – jetzt entsteht das neue Volumen.
            <br />
            <br />
            Bis 2030 verlagert der Hybrid-DRG-Shift rund 2 Millionen Eingriffe aus den Kliniken in
            den ambulanten Sektor. Sanoom bündelt die ambulanten Strukturen, öffnet Ihnen neue
            Kundenwege und reduziert Ihren Cost-to-Serve.
          </p>
        </div>
      </header>

      <section className="section partner-section" id="shift" style={{ padding: '2.5rem 0' }}>
        <div className="container">
          <div className="partner-section-header">
            <h2>
              Der <span className="partner-gradient-text">Volumen-Shift</span>
            </h2>
            <p>
              Bis 2030 entsteht eine strukturelle Umverteilung von rund 2 Mio. Prozeduren in den
              ambulanten Markt. Der Shift ist markteingreifend und dauerhaft.
            </p>
          </div>
          <div className="partner-grid">
            <div className="partner-card partner-card--accent">
              <h3>Größenordnung</h3>
              <p>
                Der Wechsel zwischen DRG, EBM & Hybrid-DRG betrifft bereits 13 % aller chirurgischen
                Eingriffe in Deutschland. Bis 2030 wird dieser ambulante Shift zur
                marktbestimmenden Realität.
                <br />
                <br />
                Sanoom bündelt Ihre ambulanten Strukturen, sichert die Planbarkeit der Volumina und
                senkt proaktiv Ihren Cost-to-Serve – ohne Datenverlust und inklusive
                Neukundengewinnung.
              </p>
              <div className="partner-metric">
                <span>2 Mio.</span>
                <small>Eingriffe pro Jahr</small>
              </div>
            </div>
            <div className="partner-card partner-card--info">
              <h3>Katalog-Dynamik</h3>
              <p>
                12 Codes in 2024, 34 in 2025 und ein Sprung auf 103 in 2026 markieren den Beginn
                einer langfristigen Umverteilung. Schwerpunkte liegen in Kardiologie, Orthopädie,
                Urologie, Gynäkologie und Chirurgie.
              </p>
              <div className="partner-chart partner-chart--small">
                <canvas ref={catalogRef} />
              </div>
              <div className="partner-metric partner-metric--stacked">
                <span>103</span>
                <small>Hybrid-DRG-Positionen (2026)</small>
              </div>
            </div>
            <div className="partner-card">
              <h3>Marktvergleich</h3>
              <p>
                Das aus der DRG migrierende Volumen erreicht die Dimension des gesamten Schweizer
                Marktes. Vor uns erschließt sich ein massives Marktpotenzial.
              </p>
              <div className="partner-chart">
                <canvas ref={marketShiftRef} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section partner-section" id="gap" style={{ padding: '2.5rem 0' }}>
        <div className="container">
          <div className="partner-section-header">
            <h2>Der Distribution Gap</h2>
            <p>
              Bestehende Klinikvertriebe können den Shift nicht effizient abfangen. Die Nachfrage
              zersplittert sich auf zehntausende Praxen & MVZ statt auf rund 1.600 Kliniken. Damit
              explodieren Service- und Akquisitionskosten – Direktvertrieb wird unprofitabel.
            </p>
          </div>
          <div className="partner-grid">
            <div className="partner-card">
              <h3>Fragmentierung</h3>
              <p>Kliniken bündeln Volumen, Praxen verteilen es.</p>
              <div className="partner-chart">
                <canvas ref={fragmentationRef} />
              </div>
            </div>
            <div className="partner-card">
              <h3>Cost-to-Serve</h3>
              <p>Direktvertrieb skaliert im Long Tail nicht wirtschaftlich.</p>
              <div className="partner-chart">
                <canvas ref={costRef} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section partner-section partner-section--light"
        id="solution"
        style={{ padding: '2.5rem 0' }}
      >
        <div className="container">
          <div className="partner-section-header">
            <h2>Die Lösung: Partner Access</h2>
            <p>
              Wir aggregieren Nachfrage, standardisieren Prozesse und halten die Datenhoheit in Ihrer
              Hand. So entsteht ein skalierbarer, messbarer Zugang zum ambulanten Markt.
            </p>
          </div>
          <div className="partner-flow partner-flow--solution">
            <div className="partner-flow-strip">
              <div className="partner-flow-card partner-flow-card--supplier">
                <span className="partner-flow-icon" aria-hidden>
                  <FlowIcon type="supplier" />
                </span>
                <h4>Lieferant</h4>
                <p>Zentrale Bulk-Anbindung</p>
              </div>
              <div className="partner-flow-connector partner-flow-connector--bulk" aria-hidden>
                <span>Bulk</span>
              </div>
              <div className="partner-flow-card partner-flow-card--primary partner-flow-card--platform">
                <span className="partner-flow-icon" aria-hidden>
                  <FlowIcon type="platform" />
                </span>
                <h4>Sanoom Platform</h4>
                <p>
                  Demand Aggregation
                  <br />
                  &amp; Smart Logistics
                </p>
                <div className="partner-flow-value">1 Anbindung - Zugang zu 10.000+ Praxen &amp; MVZ</div>
              </div>
              <div className="partner-flow-connector partner-flow-connector--distribution" aria-hidden>
                <span>Dropshipping</span>
              </div>
              <div className="partner-flow-practice-grid">
                <div className="partner-flow-card partner-flow-card--practice">
                  <span className="partner-flow-icon" aria-hidden>
                    <FlowIcon type="practice" />
                  </span>
                  <h4>Urologie Praxis</h4>
                  <p>Long-Tail Account</p>
                </div>
                <div className="partner-flow-card partner-flow-card--practice">
                  <span className="partner-flow-icon" aria-hidden>
                    <FlowIcon type="practice" />
                  </span>
                  <h4>Orthopaedie Zentrum</h4>
                  <p>Regio-Cluster</p>
                </div>
                <div className="partner-flow-card partner-flow-card--practice">
                  <span className="partner-flow-icon" aria-hidden>
                    <FlowIcon type="practice" />
                  </span>
                  <h4>MVZ Verbund</h4>
                  <p>Skalierbarer Zugang</p>
                </div>
              </div>
            </div>
            <div className="partner-flow-note">
              Eine Plattform, ein Prozess: Sie liefern Produkte, wir liefern planbaren Zugang und
              senken den Aufwand im fragmentierten Markt. Fulfillment per Dropshipping oder über
              unser Lager ist je nach Partnerpräferenz möglich. Datenhoheit und Customer Access
              bleiben vollständig bei Ihnen.
            </div>
          </div>

          <div className="partner-feature-grid">
            <div className="partner-card">
              <h3>Vertriebslücke schließen</h3>
              <p>Digitale Infrastruktur für einen fragmentierten Markt.</p>
            </div>
            <div className="partner-card">
              <h3>Effizienz</h3>
              <p>Bündelung senkt Service- und Akquisitionskosten radikal.</p>
            </div>
            <div className="partner-card">
              <h3>Transparenz</h3>
              <p>Dropshipping sichert Datenhoheit und Markenpräsenz.</p>
            </div>
            <div className="partner-card">
              <h3>KI & Logistik</h3>
              <p>Unsere Plattform befähigt Praxen zu komplexen Workflows.</p>
            </div>
            <div className="partner-card">
              <h3>Marktkapazität</h3>
              <p>Wir schaffen Nachfragefähigkeit – nicht nur einen Kanal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section partner-section" id="enabler" style={{ padding: '2.5rem 0' }}>
        <div className="container">
          <div className="partner-grid partner-grid--reverse">
            <div className="partner-card">
              <h3>Enablement durch Prozesse, KI & Plattform</h3>
              <p>
                Ohne Unterstützung fehlen Praxen oft die Kapazitäten für komplexe Eingriffe. Partner
                Access befähigt Teams über KI und Plattformlogik – mit Wirkung bis 2030.
              </p>
              <div className="partner-chart">
                <canvas ref={capacityRef} />
              </div>
            </div>
            <div className="partner-cta">
              <span className="eyebrow">Die Grundlage</span>
              <h2>Ambulante Kompetenz wird skalierbar.</h2>
              <p>
                Wir reduzieren organisatorische Hürden, beschleunigen Prozesse &amp; sichern die
                Umsetzung im Praxisalltag.
              </p>
              <ul>
                <li>Schulung von MFA- und OP-Teams</li>
                <li>Standardisierte OP-Workflows</li>
                <li>Verlässliche Logistik und Disposition</li>
                <li>Fertige OP-Kits</li>
                <li>Plattform zum Bestellmanagement für Kliniken</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section partner-section partner-section--cta" style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="partner-cta-card">
            <h2>Partner Access sichern</h2>
            <p>
              Der Markt verschiebt sich jetzt. Positionieren Sie sich frühzeitig und gestalten Sie den
              ambulanten Markt aktiv mit.
            </p>
            <Link className="button primary" to="/kontakt?focus=form&source=partner-cta">
              Gespräch anfragen
            </Link>
          </div>
        </div>
      </section>

      <section className="section partner-section" style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="partner-cta">
            <span className="eyebrow">DocEase</span>
            <h2>Intelligente Assistenz mit DocEase</h2>
            <p>
              Die Integration der DocEase-Assistenzsoftware entlastet Ihre MFA direkt am Arbeitsplatz.
              Durch standardisierte, digitale Unterstützung bei komplexen administrativen Abläufen
              wird die kognitive Belastung gesenkt. Dies sichert eine hohe Prozessqualität bei
              steigenden Fallzahlen und ermöglicht Ihrem Team einen sicheren &amp; datenschutzkonformen
              Eintritt in die AI-Welt.
            </p>
            <a className="button primary" href="https://docease.my-ai.coach/">
              DocEase Demo Testen
            </a>
            <div
              style={{
                marginTop: '1.5rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.2rem',
                alignItems: 'center',
              }}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => setIsDocEaseOpen(true)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    setIsDocEaseOpen(true)
                  }
                }}
                style={{
                  maxWidth: '220px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(220, 227, 232, 0.8)',
                  boxShadow: 'var(--shadow)',
                  cursor: 'pointer',
                }}
                aria-label="DocEase Teaser vergrößern"
              >
                <img
                  src={docEaseTeaserUrl}
                  alt="DocEase Teaser"
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                <li>gehärteter Chatassistent, DSVGO konform</li>
                <li>Digitales Nachschlagewerk mit Ihren Praxis-SOPs</li>
                <li>Digitaler Coach für Ihr Team</li>
                <li>Trainingstool für Ihre Praxis / MVZ</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {isDocEaseOpen && (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsDocEaseOpen(false)}
          onKeyDown={(event) => {
            if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
              setIsDocEaseOpen(false)
            }
          }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(8, 36, 41, 0.8)',
            display: 'grid',
            placeItems: 'center',
            padding: '2rem',
            zIndex: 999,
          }}
          aria-label="DocEase Teaser schließen"
        >
          <button
            type="button"
            aria-label="Schließen"
            onClick={(event) => {
              event.stopPropagation()
              setIsDocEaseOpen(false)
            }}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              width: '32px',
              height: '32px',
              borderRadius: '999px',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              background: 'rgba(8, 36, 41, 0.65)',
              color: '#fff',
              fontSize: '18px',
              fontWeight: 700,
              lineHeight: 1,
              cursor: 'pointer',
            }}
          >
            ×
          </button>
          <img
            src={docEaseTeaserUrl}
            alt="DocEase Teaser groß"
            style={{
              maxWidth: 'min(1100px, 92vw)',
              maxHeight: '80vh',
              borderRadius: '18px',
              boxShadow: '0 30px 70px rgba(0, 0, 0, 0.35)',
              background: '#fff',
            }}
          />
        </div>
      )}
    </div>
  )
}

export default PartnerAccessPage
