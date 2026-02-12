import { useEffect, useRef } from 'react'
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

function PartnerAccessPage() {
  const marketShiftRef = useRef<HTMLCanvasElement | null>(null)
  const fragmentationRef = useRef<HTMLCanvasElement | null>(null)
  const costRef = useRef<HTMLCanvasElement | null>(null)
  const capacityRef = useRef<HTMLCanvasElement | null>(null)
  const catalogRef = useRef<HTMLCanvasElement | null>(null)
  const heroImageUrl = `${import.meta.env.BASE_URL}Arzthelferin_Rezeption.jpg`

  useEffect(() => {
    document.body.classList.add('partner-access-bg')
    const charts: Chart[] = []

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
          data: {
            datasets: [
              {
                label: 'Kliniken',
                data: [
                  { x: 10, y: 90, r: 28 },
                  { x: 14, y: 82, r: 24 },
                  { x: 8, y: 96, r: 26 },
                ],
                backgroundColor: 'rgba(15, 93, 100, 0.75)',
              },
              {
                label: 'Praxen',
                data: [
                  { x: 60, y: 20, r: 5 },
                  { x: 66, y: 24, r: 4 },
                  { x: 70, y: 15, r: 6 },
                  { x: 82, y: 30, r: 5 },
                  { x: 55, y: 12, r: 4 },
                  { x: 75, y: 22, r: 5 },
                  { x: 88, y: 18, r: 4 },
                  { x: 92, y: 12, r: 5 },
                  { x: 62, y: 34, r: 6 },
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
                  label: (context) => context.dataset.label || '',
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
                backgroundColor: 'rgba(245, 165, 36, 0.75)',
                borderRadius: 6,
              },
              {
                label: 'Partner Access',
                data: [20, 15, 25, 10],
                backgroundColor: 'rgba(15, 93, 100, 0.85)',
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
    <div className="page partner-access">
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
            Strategischer Zugang zum ambulanten Markt
            <br />
            <span>für Hybrid-DRG</span>
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

      <section className="section partner-section" id="shift">
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

      <section className="section partner-section" id="gap">
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

      <section className="section partner-section partner-section--light" id="solution">
        <div className="container">
          <div className="partner-section-header">
            <h2>Die Lösung: Partner Access</h2>
            <p>
              Wir aggregieren Nachfrage, standardisieren Prozesse und halten die Datenhoheit in Ihrer
              Hand. So entsteht ein skalierbarer, messbarer Zugang zum ambulanten Markt.
            </p>
          </div>
          <div className="partner-flow">
            <div className="partner-flow-strip">
              <div className="partner-flow-card">
                <span className="partner-flow-icon">🏭</span>
                <h4>Lieferant</h4>
                <p>Zentrale Bulk-Anbindung</p>
              </div>
              <div className="partner-flow-card partner-flow-card--primary">
                <span className="partner-flow-icon">🌐</span>
                <h4>Sanoom Platform</h4>
                <p>
                  Demand Aggregation
                  <br />
                  &amp; Smart Logistics
                </p>
              </div>
              <div className="partner-flow-practice-grid">
                <div className="partner-flow-card partner-flow-card--practice">
                  <span className="partner-flow-icon">🏥</span>
                  <h4>Praxis A</h4>
                </div>
                <div className="partner-flow-card partner-flow-card--practice">
                  <span className="partner-flow-icon">🏥</span>
                  <h4>Praxis B</h4>
                </div>
                <div className="partner-flow-card partner-flow-card--practice">
                  <span className="partner-flow-icon">🏥</span>
                  <h4>Praxis C</h4>
                </div>
              </div>
            </div>
            <div className="partner-flow-note">
              Sie liefern die Produkte. Wir sichern den Kundenzugang und lösen die Fragmentierung
              auf. Die volle Kontrolle über Daten und Kunden bleibt bei Ihnen.
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

      <section className="section partner-section" id="enabler">
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
                Wir reduzieren organisatorische Hürden, beschleunigen Prozesse und sichern die
                Umsetzung im Praxisalltag.
              </p>
              <ul>
                <li>Schulung von MFA und OP-Teams</li>
                <li>Standardisierte OP-Workflows</li>
                <li>Verlässliche Logistik und Disposition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section partner-section partner-section--cta">
        <div className="container">
          <div className="partner-cta-card">
            <h2>Partner Access sichern</h2>
            <p>
              Der Markt verschiebt sich jetzt. Positionieren Sie sich frühzeitig und gestalten Sie den
              ambulanten Markt aktiv mit.
            </p>
            <a className="button primary" href="mailto:info@hdrg-kompass.de">
              Gespräch anfragen
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PartnerAccessPage
