import { getBaseUrl } from '../utils/baseUrl'

function HybridDrgPage() {
  const baseUrl = getBaseUrl()
  const principleImage = `${baseUrl}hDRGPrinzip.jpg`

  return (
    <div className="page">
      <section className="section">
        <div className="container narrow">
          <h1>Hybrid-DRG – Gleiche Vergütung für gleiche Leistung</h1>
          <h2>Der Grundgedanke</h2>
          <p>
            Schluss mit der finanziellen Unterscheidung zwischen Klinik und Praxis: Hybrid-DRGs (hDRG)
            garantieren für ausgewählte Eingriffe eine identische Vergütung – unabhängig davon, wo die
            Leistung erbracht wird. Das Ziel nach § 115f SGB V ist klar: Ambulante Potenziale sollen
            konsequent gestärkt und Planungssicherheit geschaffen werden.
          </p>
          <div className="principle-grid">
            <div className="callout">
              <h3>Die Konsequenz für die Praxis</h3>
              <p>
                Es gilt eine einfache Formel: Eine einheitliche Pauschale pro Fall. Damit verlagert sich
                der Fokus der Wirtschaftlichkeit auf effiziente Abläufe, eine stabile
                Sachkosten-Kalkulation und eine lückenlose Dokumentation.
              </p>
            </div>
            <div className="principle-image">
              <img src={principleImage} alt="hDRG Prinzip" />
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container grid-2">
          <div className="card">
            <h2>Wie das Prinzip funktioniert</h2>
            <h3>Der Katalog gibt den Takt vor</h3>
            <p>
              Nicht jeder Eingriff fällt unter diese Regelung. Ein definierter Katalog legt exakt fest,
              welche Leistungen als Hybrid-DRG vergütet werden. Für diese Eingriffe ist die Erlöshöhe
              fixiert, egal ob der Patient ambulant oder stationär versorgt wird.
            </p>
          </div>
          <div className="card">
            <h2>Alles in einer Pauschale</h2>
            <p>
              Die Vergütung deckt sämtliche Leistungen ab, die im direkten Zusammenhang mit dem Eingriff
              stehen. Der entscheidende Faktor: Auch die Sachkosten sind Teil dieser Pauschale. Das
              bedeutet, dass der wirtschaftliche Erfolg direkt von einem präzisen Materialmanagement
              abhängt.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Was das für das Team bedeutet</h2>
            <h3>Für Ärztinnen & Ärzte: Planungssicherheit</h3>
            <p>
              Der größte Vorteil ist der Wegfall der finanziellen Benachteiligung gegenüber Kliniken.
              Durch feste Kataloge lassen sich OP-Programme verlässlich planen. Das schafft endlich den
              nötigen wirtschaftlichen Spielraum für eine hochwertige ambulante Spezialisierung und
              strukturierte Nachsorge.
            </p>
          </div>
          <div>
            <h2>&nbsp;</h2>
            <h3>Für Praxisteam & MFA: Prozess-Exzellenz</h3>
            <p>
              Die Rolle der MFA wandelt sich zum Prozess-Manager. Da Materialkosten in der Pauschale
              inkludiert sind, werden standardisierte OP-Sets und eine transparente Lagerhaltung kritisch
              für den Ertrag. Eine saubere Dokumentation und eine exakte Zeitsteuerung der Abläufe sichern
              am Ende den Gewinn der Praxis.
            </p>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container narrow">
          <h2>Aktueller Stand</h2>
          <p>
            Das System ist seit dem 1. Januar 2024 aktiv. Der Bewertungsausschuss passt die Regeln
            dynamisch an: Für das Jahr 2026 wurde der Katalog bereits erweitert und umfasst nun 69
            Hybrid-DRGs mit insgesamt 904 OPS-Kodes.
          </p>
          <p>
            Weitere Details zur Abrechnung, Vergütung und zum Leistungskatalog finden Sie hier:{' '}
            <a
              className="text-link"
              href="https://www.kbv.de/praxis/abrechnung/ambulantes-operieren/hybrid-drg"
              target="_blank"
              rel="noreferrer"
            >
              KBV – Hybrid-DRG
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  )
}

export default HybridDrgPage
