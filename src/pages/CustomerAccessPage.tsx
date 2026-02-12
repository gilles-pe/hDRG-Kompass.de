import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  DoughnutController,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js'

Chart.register(
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  DoughnutController,
  LinearScale,
  Legend,
  Tooltip
)

function CustomerAccessPage() {
  const drgChartRef = useRef<HTMLCanvasElement | null>(null)
  const marginChartRef = useRef<HTMLCanvasElement | null>(null)
  const drgChartInstance = useRef<Chart | null>(null)
  const marginChartInstance = useRef<Chart | null>(null)

  const [efficiency, setEfficiency] = useState(12)
  const [procurement, setProcurement] = useState(10)
  const [isDocEaseOpen, setIsDocEaseOpen] = useState(false)
  const fix = 40

  const profitPerc = useMemo(() => Math.max(0, 100 - fix - efficiency - procurement), [
    efficiency,
    procurement,
  ])
  const profitValue = useMemo(
    () => Math.round(20000 * (profitPerc / 100)),
    [profitPerc]
  )

  const heroImageUrl = `${import.meta.env.BASE_URL}DoctorTablet.jpg`
  const docEaseTeaserUrl = `${import.meta.env.BASE_URL}DocEaseTeaser.jpg`

  useEffect(() => {
    document.body.classList.add('partner-access-bg')
    if (drgChartRef.current) {
      const existingCanvasChart = Chart.getChart(drgChartRef.current)
      if (existingCanvasChart) {
        existingCanvasChart.destroy()
      }
      const existing = drgChartInstance.current
      if (existing && existing.canvas === drgChartRef.current) {
        // Chart already initialized for this canvas.
      } else {
        if (existing) {
          existing.destroy()
        }
        drgChartInstance.current = new Chart(drgChartRef.current, {
          type: 'bar',
          data: {
            labels: ['2024', '2025', '2026', '2027', '2028', '2029'],
            datasets: [
              {
                label: 'Hybrid-DRG Codes',
                data: [12, 34, 103, null, null, null],
                backgroundColor: [
                  'rgba(148, 163, 184, 0.8)',
                  'rgba(99, 102, 241, 0.25)',
                  'rgba(15, 93, 100, 0.9)',
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0)',
                ],
                borderRadius: 6,
                barThickness: 26,
              },
              {
                label: 'Trend bis 2028 (offen)',
                data: [null, null, null, 520, 900, null],
                clip: false,
                backgroundColor: 'rgba(15, 93, 100, 0.08)',
                borderColor: 'rgba(15, 93, 100, 0.45)',
                borderWidth: 1.6,
                borderSkipped: 'top',
                borderRadius: 6,
                barThickness: 26,
              },
              {
                label: 'Trend 2029 (abgeschnitten)',
                data: [null, null, null, null, null, 1600],
                backgroundColor: 'rgba(15, 93, 100, 0.05)',
                borderColor: 'rgba(15, 93, 100, 0.28)',
                borderWidth: 1.6,
                borderSkipped: 'top',
                borderRadius: 6,
                barThickness: 26,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    if (
                      context.dataset.label === 'Trend bis 2028 (offen)' ||
                      context.dataset.label === 'Trend 2029 (abgeschnitten)'
                    ) {
                      return `Trend bis 2029: ${context.parsed.y} (offen)`
                    }
                    return `Codes: ${context.parsed.y}`
                  },
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 180,
                ticks: { stepSize: 20 },
                grid: { color: 'rgba(226, 232, 240, 0.6)' },
              },
              x: {
                grid: { display: false },
              },
            },
          },
        })
      }
    }

    if (marginChartRef.current) {
      const existingCanvasChart = Chart.getChart(marginChartRef.current)
      if (existingCanvasChart) {
        existingCanvasChart.destroy()
      }
      const existing = marginChartInstance.current
      if (existing && existing.canvas === marginChartRef.current) {
        // Chart already initialized for this canvas.
      } else {
        if (existing) {
          existing.destroy()
        }
        marginChartInstance.current = new Chart(marginChartRef.current, {
          type: 'doughnut',
          data: {
            labels: ['Profit', 'Einkauf', 'Admin/Stress', 'Fixkosten'],
            datasets: [
              {
                data: [profitPerc, procurement, efficiency, fix],
                backgroundColor: [
                  'rgba(15, 93, 100, 0.85)',
                  'rgba(239, 68, 68, 0.75)',
                  'rgba(245, 165, 36, 0.75)',
                  'rgba(148, 163, 184, 0.7)',
                ],
                borderWidth: 0,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '78%',
            plugins: {
              legend: { display: false },
            },
          },
        })
      }
    }

    return () => {
      if (drgChartRef.current) {
        const existingCanvasChart = Chart.getChart(drgChartRef.current)
        if (existingCanvasChart) {
          existingCanvasChart.destroy()
        }
      }
      if (marginChartRef.current) {
        const existingCanvasChart = Chart.getChart(marginChartRef.current)
        if (existingCanvasChart) {
          existingCanvasChart.destroy()
        }
      }
      if (drgChartInstance.current) {
        drgChartInstance.current.destroy()
        drgChartInstance.current = null
      }
      if (marginChartInstance.current) {
        marginChartInstance.current.destroy()
        marginChartInstance.current = null
      }
      document.body.classList.remove('partner-access-bg')
    }
  }, [])

  useEffect(() => {
    if (!marginChartInstance.current) {
      return
    }

    marginChartInstance.current.data.datasets[0].data = [profitPerc, procurement, efficiency, fix]
    marginChartInstance.current.update()
  }, [efficiency, procurement, profitPerc])

  return (
    <div className="page partner-access customer-access-page">
      <header className="partner-hero">
        <div
          className="partner-hero-media"
          role="img"
          aria-label="Arzt arbeitet digital am Tablet"
          style={{
            backgroundImage: `url('${heroImageUrl}')`,
          }}
        />
        <div className="partner-hero-overlay" />
        <div className="container partner-hero-content">
          <span className="eyebrow">Support für Praxen und MVZ</span>
          <h1>
            Mehr OP-Kapazität.
            <br />
            <span>Weniger Bürokratie im Alltag.</span>
          </h1>
          <p className="hero-lead">
            Der ambulante Shift ist keine Theorie mehr: In den nächsten Jahren wandern rund 2
            Millionen OPs in den Praxissektor. Sanoom schafft die operative Infrastruktur, damit Ihr
            Team schneller arbeitet und die Marge pro Eingriff stabil steigt; hDRG und
            Praxismanagement kann so einfach sein.
          </p>
          <div className="customer-access-proof">
            <span>Weniger Belastung für MFA</span>
            <span>Bessere Planbarkeit für Ärzt:innen</span>
            <span>DSGVO-konforme AI Assistenz</span>
          </div>
          <div className="customer-access-hero-actions">
            <a className="button primary" href="#oekonomie">
              Profit-Rechner ansehen
            </a>
            <a className="button secondary" href="mailto:info@hdrg-kompass.de">
              Praxisgespräch buchen
            </a>
          </div>
          <div className="customer-access-hero-stats">
            <div className="customer-access-hero-stat">
              <strong>2 Mio.</strong>
              <small>zusätzliche ambulante Eingriffe bis 2030</small>
            </div>
            <div className="customer-access-hero-stat">
              <strong>103 Codes</strong>
              <small>Hybrid-DRG Positionen bereits in 2026</small>
            </div>
            <div className="customer-access-hero-stat">
              <strong>10.000-20.000 Euro</strong>
              <small>Umsatzpotenzial pro OP-Tag und mehr</small>
            </div>
          </div>
        </div>
      </header>

      <section className="section partner-section" id="transformation">
        <div className="container">
          <div className="customer-section-intro">
            <h2>Was Ihr Team spürt</h2>
          </div>
          <div className="customer-focus-grid">
            <article className="customer-focus-card">
              <h3>Stabiler OP-Flow</h3>
              <p>Weniger Materiallücken und klarere Abläufe in Vorbereitung und Nachbereitung.</p>
            </article>
            <article className="customer-focus-card">
              <h3>Mehr Zeit am Patienten</h3>
              <p>
                Logistik, Plattform und Assistenz reduzieren Suchzeiten, Rückfragen und unnötige
                Admin-Schleifen.
              </p>
            </article>
            <article className="customer-focus-card">
              <h3>Wirtschaftlich klar</h3>
              <p>Fixvergütung bleibt profitabel, weil Ineffizienzen systematisch gesenkt werden.</p>
            </article>
          </div>
          <div className="partner-grid customer-main-grid">
            <div className="partner-card">
              <h2>Die Dynamik der Hybrid-DRG für Praxen</h2>
              <p>
                Was als Pilotprojekt begann, entwickelt sich rasant: Von 12 Codes im Jahr 2024 über
                34 in 2025 auf 103 Codes ab 2026. Dieser Zuwachs in Clustern wie Kardiologie,
                Orthopädie und Urologie markiert erst den Anfang einer umfassenden strukturellen
                Umverteilung des operativen Volumens bis 2030.
              </p>
              <div className="partner-feature-grid customer-mini-metrics">
                <div className="partner-card customer-stat-card">
                  <div className="partner-metric">
                    <span>10.000-20.000 Euro</span>
                    <small>Umsatz pro OP-Tag und mehr möglich</small>
                  </div>
                </div>
                <div className="partner-card customer-stat-card">
                  <div className="partner-metric">
                    <span>103</span>
                    <small>Hybrid-DRG Codes in 2026</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="partner-card customer-chart-card">
              <h3>Explosion der Abrechnungscodes</h3>
              <div className="partner-chart customer-drg-chart">
                <canvas ref={drgChartRef} height={260} />
                <div className="customer-drg-fade" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section partner-section partner-section--light" id="oekonomie">
        <div className="container">
          <div className="partner-grid customer-main-grid">
            <div className="partner-card">
              <h3>Ökonomie und Teambindung im echten Praxisbetrieb</h3>
              <p>
                Da die Hybrid-DRG als Pauschalvergütung fungiert, wird die Prozesskontrolle zum
                entscheidenden Rentabilitätsfaktor. In einem Flatrate-System reduziert jede
                operative Ineffizienz direkt Ihr Ergebnis. Gleichzeitig ist Ihr Fachpersonal Ihre
                wertvollste Ressource: Wir senken die kognitive Belastung, um Raum für die
                medizinische Kernarbeit zu schaffen und Fachkräfte langfristig zu binden.
              </p>
              <div className="partner-feature-grid customer-mini-metrics customer-logic-grid">
                <div className="partner-card customer-logic-card">
                  <h4>Flatrate-Logik</h4>
                  <p>
                    Fixe Erlöse erfordern strikt kontrollierte Kostenstrukturen. Jede Minute
                    Suchzeit oder Fehlbestellung ist ein direkter Margenverlust.
                  </p>
                </div>
                <div className="partner-card customer-logic-card">
                  <h4>Mitarbeiter-Komfort</h4>
                  <p>
                    Weniger Stress durch digitale Assistenz führt zu höherer Bindung und weniger
                    Fluktuation in einem umkämpften Personalmarkt.
                  </p>
                </div>
              </div>
            </div>
            <div className="partner-card">
              <h3>Ihr Ergebnis pro OP-Tag</h3>
              <div className="partner-chart customer-profit-chart">
                <canvas ref={marginChartRef} />
                <div className="customer-profit-center">
                  <div className="customer-profit-label">Mehrumsatz</div>
                  <div className="customer-profit-value">{profitValue.toLocaleString('de-DE')} €</div>
                  <div className="customer-profit-label customer-profit-label--spaced">
                    Deckungsbeitrag
                  </div>
                  <div className="customer-profit-value">{profitPerc}%</div>
                </div>
              </div>
              <div className="customer-slider-panel">
                <label className="customer-slider-row">
                  <strong>Team-Ineffizienzen: {efficiency}%</strong>
                  <input
                    className="customer-slider"
                    type="range"
                    min={5}
                    max={40}
                    value={efficiency}
                    onChange={(event) => setEfficiency(Number(event.target.value))}
                  />
                </label>
                <label className="customer-slider-row">
                  <strong>Einkaufskonditionen: {procurement}%</strong>
                  <input
                    className="customer-slider"
                    type="range"
                    min={5}
                    max={30}
                    value={procurement}
                    onChange={(event) => setProcurement(Number(event.target.value))}
                  />
                </label>
                <div className="customer-profit-highlight">
                  <h4>{profitValue.toLocaleString('de-DE')} €</h4>
                  <p>Tages-Profit bei 20.000 Euro Umsatz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section partner-section" id="loesung">
        <div className="container">
          <div className="partner-section-header">
            <h2>Der Sanoom-Beitrag zu Ihrer Praxis</h2>
            <p>
              Ganzheitliche Unterstützung für Material, Logistik und digitale Assistenz im
              laufenden Betrieb. Als One-Stop-Shop bieten wir alles in einer Plattform: von Praxis-
              und Sprechstundenbedarf bis zu OP-Materialien für die neuen hDRG. So wird aus
              Komplexität ein klarer, alltagstauglicher Ablauf.
            </p>
          </div>
          <div className="partner-feature-grid customer-solution-grid">
            <div className="partner-card">
              <h3>Optimale Patientenversorgung durch Prozesssicherheit</h3>
              <p>
                Wir liefern die Ware und Ausrüstung, welche für spezifische Eingriffe benötigt
                werden – auf Wunsch als konfektionierte Sets für einen risikoarmen Start.
              </p>
            </div>
            <div className="partner-card">
              <h3>Mitarbeiterbindung durch operative Entlastung</h3>
              <p>
                Sanoom konsolidiert das Management hunderter Lieferanten in einer Schnittstelle. Wir
                senken die administrative Last und schaffen Raum für die Kernarbeit.
              </p>
            </div>
            <div className="partner-card">
              <h3>Wirtschaftliche Skalierung und Einkaufsvorteile</h3>
              <p>
                Wir aggregieren den Bedarf von Praxen, um strukturelle Nachteile gegenüber Kliniken
                zu nivellieren und Einkaufskonditionen nachhaltig zu schützen.
              </p>
            </div>
            <div className="partner-card">
              <h3>Wettbewerbsfähigkeit im dynamischen Umfeld</h3>
              <p>
                Die Bewältigung hoher Fallzahlen erfordert Prozessdisziplin. Wir liefern die
                Infrastruktur, damit die Wertschöpfung vollständig in Ihrem MVZ verbleibt.
              </p>
            </div>
          </div>

          <div className="customer-spacer" />

          <div className="partner-cta-card customer-main-cta">
            <h2>Sanoom ist Ihr strategischer Partner für Wachstum.</h2>
            <p>
              Wir schaffen die operative Kapazität, damit Ihr MVZ die Marktanteile des stationären
              Bereichs profitabel übernehmen kann. Mit einem System, das den Einstieg spürbar
              erleichtert und Ihr Team sofort entlastet.
            </p>
            <a className="button primary" href="mailto:info@hdrg-kompass.de">
              Gespräch anfragen
            </a>
          </div>

          <div className="customer-spacer" />

          <div className="partner-cta customer-docease">
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
                  border: '1px solid rgba(15, 93, 100, 0.22)',
                  boxShadow: '0 16px 30px rgba(8, 36, 41, 0.14)',
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
              <ul className="customer-docease-list">
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

export default CustomerAccessPage
