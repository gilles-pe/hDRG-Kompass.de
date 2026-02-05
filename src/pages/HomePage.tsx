import { Link } from 'react-router-dom'

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
  const logoUrl = `${import.meta.env.BASE_URL}hdrg_kompass.svg`
  const heroImageUrl = `${import.meta.env.BASE_URL}DoctorTablet.jpg`
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-bleed">
          <div
            className="hero-bleed-image"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(10, 68, 73, 0.55), rgba(42, 169, 160, 0.3)), url('${heroImageUrl}')`,
            }}
          />
          <div className="container hero-bleed-content">
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
              <div className="hero-actions">
                <Link className="button primary" to="/fachbereiche">
                  Fachbereiche ansehen
                </Link>
                <Link className="button secondary" to="/hybrid-drg">
                  Hybrid-DRG erklärt
                </Link>
              </div>
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
              Die Krankenhausreform und neue hDRG-Pauschalen verlagern komplexe Eingriffe in die Ambulanz.
              Für Praxen bedeutet das mehr Volumen, aber auch neue Anforderungen an Prozesse, Materialkosten
              und Teamkapazitäten.
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
