import { Link } from 'react-router-dom'
import { getBaseUrl } from '../utils/baseUrl'

const fachbereiche = [
  { id: 'kardiologie', title: 'Kardiologie', subtitle: 'PCI & Schrittmacher' },
  { id: 'orthopaedie', title: 'Orthopädie & Sportmedizin', subtitle: 'Knie, Schulter, Hand & Fuß' },
  { id: 'viszeralchirurgie', title: 'Viszeralchirurgie', subtitle: 'Hernien & Galle' },
  { id: 'urologie', title: 'Urologie', subtitle: 'TUR-P & Harnstein' },
  { id: 'gynaekologie', title: 'Gynäkologie', subtitle: 'LASH & Mamma' },
  { id: 'gefaesschirurgie', title: 'Gefäßchirurgie', subtitle: 'Varizen' },
  { id: 'hno', title: 'HNO', subtitle: 'Septum/NNH & RF' },
  { id: 'proktologie', title: 'Proktologie', subtitle: 'Hämorrhoiden' },
  { id: 'gastroenterologie', title: 'Gastroenterologie', subtitle: 'ERCP & Koloskopie' },
]

function HomePage() {
  const baseUrl = getBaseUrl()
  const logoUrl = `${baseUrl}hdrg_kompass.svg`
  const heroImageUrl = `${baseUrl}Ambulantes%20OP%20Zentrum%20Hero%20Pic.jpg`
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-bleed">
          <div
            className="hero-bleed-image"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(10, 68, 73, 0.55), rgba(42, 169, 160, 0.3)), url('${heroImageUrl}')`,
            }}
          />
          <div className="container hero-bleed-content">
            <div className="home-hero-layout">
              <div className="hero-glass">
                <div className="hero-kicker">
                  <img className="hero-logo" src={logoUrl} alt="hDRG-Kompass Logo" />
                  <p className="eyebrow">Leitfaden für Praxen und MVZ</p>
                </div>
                <h1>Hybrid-DRG verständlich für Praxen</h1>
                <p className="hero-lead">
                  Ambulantisierung verändert Versorgungsstrukturen. hDRG-Kompass.de bietet Fakten,
                  Praxisperspektive und eine klare Orientierungshilfe.
                </p>
                <div className="home-hero-highlights">
                  <span>103 Hybrid-DRG Codes ab 2026</span>
                  <span>ca. 2 Mio. Eingriffe bis 2030 ambulant</span>
                </div>
                <div className="hero-actions">
                  <Link className="button primary" to="/fachbereiche">
                    Fachbereiche ansehen
                  </Link>
                  <Link className="button secondary" to="/hybrid-drg">
                    Hybrid-DRG erklärt
                  </Link>
                </div>
              </div>
              <aside className="home-hero-panel" aria-label="Hybrid-DRG Kennzahlen">
                <p className="home-hero-panel-eyebrow">Ambulantes OP Zentrum</p>
                <h2>Ihre Chancen im Überblick</h2>
                <ul className="home-hero-panel-list">
                  <li>
                    <strong>Umsatzhebel:</strong> planbare hDRG-Pauschalen pro Fall
                  </li>
                  <li>
                    <strong>Wachstum:</strong> steigendes ambulantes OP-Volumen
                  </li>
                  <li>
                    <strong>Positionierung:</strong> Sichtbarkeit in der Region
                  </li>
                </ul>
                <Link className="home-hero-panel-link" to="/fachbereiche">
                  Zu den Fachbereichen
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section quick-select">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Schnellwahl</p>
            <h2>Fachbereiche sofort auswählen</h2>
            <p className="muted">
              Direkt zu den passenden Fachbereichen mit hDRG-Eingriffen, Pauschalen und Checklisten.
            </p>
          </div>
          <div className="quick-grid">
            {fachbereiche.map((fachbereich) => (
              <Link
                className="quick-card"
                to={`/fachbereiche#${fachbereich.id}`}
                key={fachbereich.title}
              >
                <h3>{fachbereich.title}</h3>
                <p>{fachbereich.subtitle}</p>
                <span className="quick-cta">Öffnen</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>Warum Hybrid-DRG jetzt relevant ist</h2>
            <p>
              Die Krankenhausreform und die neuen hDRG-Pauschalen verlagern bis 2030 rund 2 Millionen
              Eingriffe in den ambulanten Bereich. Mit bereits 103 Hybrid-DRG-Codes (ab 2026) entsteht für
              Praxen damit eine echte Wachstumschance: mehr Fälle, mehr Umsatzpotenzial und die Möglichkeit,
              sich als leistungsstarker Versorger klar zu positionieren. Damit dieses Volumen im Alltag
              profitabel umgesetzt wird, braucht das Team gezielte Unterstützung bei Prozessen,
              Materialmanagement und OP-Organisation.
            </p>
          </div>
          <div className="card">
            <h3>Was Sie hier finden</h3>
            <p>Übersichtliche Fakten, Fachbereiche, Patientenvorteile und praktische Checklisten.</p>
            <Link className="text-link" to="/hybrid-drg">
              Hybrid-DRG erklärt
            </Link>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container grid-3">
          <div className="info-tile">
            <h3>Praxis-Perspektive</h3>
            <p>Wie sich hDRG auf Organisation, Ressourcen und Abläufe auswirkt.</p>
          </div>
          <div className="info-tile">
            <h3>Patientenvorteile</h3>
            <p>Weniger Klinikaufenthalt, planbare Abläufe, vertraute Versorgung.</p>
          </div>
          <div className="info-tile">
            <h3>Fachbereiche</h3>
            <p>12 Fachbereiche mit hDRG-Eingriffen, Pauschalen und Checklisten.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
