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
  const [procurement, setProcurement] = useState(20)
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
            labels: ['2024', '2025', '2026'],
            datasets: [
              {
                label: 'Hybrid-DRG Codes',
                data: [12, 34, 103],
                backgroundColor: [
                  'rgba(148, 163, 184, 0.8)',
                  'rgba(99, 102, 241, 0.25)',
                  'rgba(15, 93, 100, 0.9)',
                ],
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
            },
            scales: {
              y: {
                beginAtZero: true,
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
    <div className="page partner-access">
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
          <span className="eyebrow">Die Hybrid DRG ist da</span>
          <h1>
            Der ambulante Shift:
            <br />
            <span>2 Millionen OPs ziehen um.</span>
          </h1>
          <p className="hero-lead">
            Innerhalb der nächsten fünf Jahre verlagern sich ca. 13 % des stationären Volumens
            konsequent aus der Klinik in den ambulanten Sektor. Sanoom liefert die notwendige
            Infrastruktur, um diese markteingreifende Realität profitabel zu gestalten.
          </p>
        </div>
      </header>

      <section className="section partner-section" id="transformation">
        <div className="container">
          <div className="partner-grid">
            <div className="partner-card">
              <h2>Die Dynamik der Hybrid-DRG</h2>
              <p>
                Was als Pilotprojekt begann, entwickelt sich rasant: Von 12 Codes im Jahr 2024 über
                34 in 2025 auf 103 Codes ab 2026. Dieser Zuwachs in Clustern wie Kardiologie,
                Orthopädie und Urologie markiert erst den Anfang einer vollständigen strukturellen
                Umverteilung des operativen Volumens bis 2030.
              </p>
              <div className="partner-feature-grid">
                <div className="partner-card">
                  <div className="partner-metric">
                    <span>10–20k €</span>
                    <small>Umsatz pro OP-Tag möglich</small>
                  </div>
                </div>
                <div className="partner-card">
                  <div className="partner-metric">
                    <span>103</span>
                    <small>Hybrid-DRG Codes in 2026</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="partner-card">
              <h3>Explosion der Abrechnungscodes</h3>
              <div className="partner-chart" style={{ height: '260px' }}>
                <canvas ref={drgChartRef} height={260} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section partner-section partner-section--light" id="ökonomie">
        <div className="container">
          <div className="partner-grid">
            <div className="partner-card">
              <h3>Ökonomie &amp; Mitarbeiterbindung</h3>
              <p>
                Da die Hybrid-DRG als Pauschalvergütung fungiert, wird die Prozesskontrolle zum
                entscheidenden Rentabilitätsfaktor. In einem Flatrate-System reduziert jede
                operative Ineffizienz direkt Ihr Ergebnis. Gleichzeitig ist Ihr Fachpersonal Ihre
                wertvollste Ressource: Wir senken die kognitive Belastung, um Raum für die
                medizinische Kernarbeit zu schaffen und Fachkräfte langfristig zu binden.
              </p>
              <div className="partner-feature-grid">
                <div className="partner-card">
                  <h4>Flatrate-Logik</h4>
                  <p>
                    Fixe Erlöse erfordern strikt kontrollierte Kostenstrukturen. Jede Minute
                    Suchzeit oder Fehlbestellung ist ein direkter Margenverlust.
                  </p>
                </div>
                <div className="partner-card">
                  <h4>Mitarbeiter-Komfort</h4>
                  <p>
                    Weniger Stress durch digitale Assistenz führt zu höherer Bindung und weniger
                    Fluktuation in einem umkämpften Personalmarkt.
                  </p>
                </div>
              </div>
            </div>
            <div className="partner-card">
              <h3>Flatrate-Reality-Check</h3>
              <div className="partner-chart" style={{ position: 'relative' }}>
                <canvas ref={marginChartRef} />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    pointerEvents: 'none',
                    gap: '0.2rem',
                  }}
                >
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Mehrumsatz</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                    {profitValue.toLocaleString('de-DE')} €
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.35rem' }}>
                    Deckungsbeitrag
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                    {profitPerc}%
                  </div>
                </div>
              </div>
              <div className="partner-cta">
                <label>
                  <strong>Team-Ineffizienzen: {efficiency}%</strong>
                  <input
                    type="range"
                    min={5}
                    max={40}
                    value={efficiency}
                    onChange={(event) => setEfficiency(Number(event.target.value))}
                  />
                </label>
                <label>
                  <strong>Einkaufskonditionen: {procurement}%</strong>
                  <input
                    type="range"
                    min={5}
                    max={30}
                    value={procurement}
                    onChange={(event) => setProcurement(Number(event.target.value))}
                  />
                </label>
                <div>
                  <h4>{profitValue.toLocaleString('de-DE')} €</h4>
                  <p>Tages-Profit bei 20k € Umsatz</p>
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
            <p>Ganzheitliche Unterstützung für Hardware, Logistik und digitale Assistenz.</p>
          </div>
          <div className="partner-feature-grid">
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

          <div style={{ height: '2rem' }} />

          <div className="partner-cta-card">
            <h2>Sanoom ist Ihr strategischer Partner für Wachstum.</h2>
            <p>
              Wir schaffen die operative Kapazität, damit Ihr MVZ die Marktanteile des stationären
              Bereichs profitabel übernehmen kann.
            </p>
            <a className="button primary" href="mailto:info@hdrg-kompass.de">
              Gespräch anfragen
            </a>
          </div>

          <div style={{ height: '2rem' }} />

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
            <a className="button primary" href="mailto:info@hdrg-kompass.de">
              DocEase Demo anfordern
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomerAccessPage
