import { useState } from 'react'
import Accordion, { type AccordionItem } from '../components/Accordion'

type PauschaleOption = {
  label: string
  value: number
}

type FachbereichCalculatorProps = {
  pauschalen: PauschaleOption[]
  defaultOpsPerWeek?: number
  defaultWeeksPerYear?: number
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('de-DE').format(value)
}

function formatEuro(value: number) {
  return `${formatNumber(value)} €`
}

function FachbereichCalculator({
  pauschalen,
  defaultOpsPerWeek = 8,
  defaultWeeksPerYear = 46,
}: FachbereichCalculatorProps) {
  const [opsPerWeek, setOpsPerWeek] = useState(defaultOpsPerWeek)
  const [weeksPerYear, setWeeksPerYear] = useState(defaultWeeksPerYear)
  const [pauschale, setPauschale] = useState(pauschalen[0]?.value ?? 0)

  const opsPerYear = opsPerWeek * weeksPerYear
  const jahresvolumen = pauschale * opsPerYear

  return (
    <div className="fach-calc">
      <h4>OP-Betrieb kalkulieren</h4>
      <div className="fach-calc-grid">
        <label className="slider-field">
          OPS pro Woche
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
          Wochen pro Jahr (OP-Betrieb)
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
        <label className="select-field">
          Pauschale pro Fall
          <select value={pauschale} onChange={(event) => setPauschale(Number(event.target.value))}>
            {pauschalen.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <div className="calc-result">
          <span>OPS pro Jahr</span>
          <span>{formatNumber(opsPerYear)}</span>
        </div>
        <div className="calc-result">
          <span>Umsatz-Potenzial</span>
          <span>{formatEuro(jahresvolumen)}</span>
        </div>
      </div>
    </div>
  )
}

const specialties: AccordionItem[] = [
  {
    id: 'kardiologie',
    title: 'Kardiologie (PCI & Schrittmacher)',
    subtitle: 'F24F – PCI | F12F – Schrittmacher',
    content: (
      <div className="accordion-content">
        <p>
          Ambulante Interventionen sind klinisch etabliert; im Praxis-OP profitieren Sie von klaren
          Abläufen, verlässlichen Sachkosten und einer konsistenten Patientenführung.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Ärztinnen & Ärzte</h4>
            <ul>
              <li>Kontinuierliche Patientenführung ohne Klinikbruch</li>
              <li>Planbare Terminierung und kurze Wege</li>
              <li>Reduzierte Liegezeiten, höhere Patientensicherheit</li>
            </ul>
          </div>
          <div>
            <h4>Für Praxisteam & MFA</h4>
            <ul>
              <li>Angiographie-Anlage (LHK)</li>
              <li>Monitoring- und Notfall-Setup</li>
              <li>Strahlenschutz- und Dokumentationsstandard</li>
              <li>Programmiergeräte für Schrittmacher</li>
            </ul>
          </div>
        </div>
        <FachbereichCalculator
          pauschalen={[
            { label: `F24F – PCI – ${formatEuro(3200)}`, value: 3200 },
            { label: `F12F – Schrittmacher – ${formatEuro(4100)}`, value: 4100 },
          ]}
        />
      </div>
    ),
  },
  {
    id: 'orthopaedie',
    title: 'Sportmedizin (Knie & Schulter)',
    subtitle: 'I29Z – Knie | I30Z – Schulter',
    content: (
      <div className="accordion-content">
        <p>
          Hohe Fallzahlen verlangen eine saubere Standardisierung der Instrumente, Sets und
          OP-Zeiten. Das schafft messbare Effizienz und Ergebnisqualität.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Ärztinnen & Ärzte</h4>
            <ul>
              <li>Hohe Routine und reproduzierbare Ergebnisse</li>
              <li>Schnelle Mobilisation, kurze Erholungszeiten</li>
              <li>Reha-nahe Versorgung mit klarer Nachsorge</li>
            </ul>
          </div>
          <div>
            <h4>Für Praxisteam & MFA</h4>
            <ul>
              <li>Arthroskopie-Turm</li>
              <li>Fluid-Management</li>
              <li>Shaver- und RF-Systeme</li>
              <li>Standardisierte Lagerung</li>
            </ul>
          </div>
        </div>
        <FachbereichCalculator
          pauschalen={[
            { label: `I29Z – Knie – ${formatEuro(3400)}`, value: 3400 },
            { label: `I30Z – Schulter – ${formatEuro(3650)}`, value: 3650 },
          ]}
        />
      </div>
    ),
  },
  {
    id: 'viszeralchirurgie',
    title: 'Viszeralchirurgie (Hernien & Galle)',
    subtitle: 'G24Z – Hernien | H08B – Galle',
    content: (
      <div className="accordion-content">
        <p>
          Volumenstarke Eingriffe profitieren von standardisierten OP-Abläufen, klaren
          Materialkörben und strikter Kostenkontrolle.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Ärztinnen & Ärzte</h4>
            <ul>
              <li>Planbare OP-Termine ohne Klinikverschiebung</li>
              <li>Kontinuierliche Betreuung in vertrauter Umgebung</li>
              <li>Moderne Recovery- und Nachsorgeprozesse</li>
            </ul>
          </div>
          <div>
            <h4>Für Praxisteam & MFA</h4>
            <ul>
              <li>Laparoskopie-Turm & CO2-Insufflator</li>
              <li>HF-Chirurgie</li>
              <li>MIC-Instrumente</li>
              <li>Standardisiertes Narkose-Setup</li>
            </ul>
          </div>
        </div>
        <FachbereichCalculator
          pauschalen={[
            { label: `G24Z – Hernien – ${formatEuro(1980)}`, value: 1980 },
            { label: `H08B – Galle – ${formatEuro(2400)}`, value: 2400 },
          ]}
        />
      </div>
    ),
  },
  {
    id: 'urologie',
    title: 'Urologie (TUR-P & Harnstein)',
    subtitle: 'L06Z – TUR-P | L17C – Harnstein',
    content: (
      <div className="accordion-content">
        <p>
          Endourologische Eingriffe werden durch stabile Logistik, sichere Prozessketten und moderne
          Technik besonders effizient.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Ärztinnen & Ärzte</h4>
            <ul>
              <li>Diskrete Versorgung in vertrauter Struktur</li>
              <li>Planbare Abläufe ohne Klinikverschiebung</li>
              <li>Kontinuität in Behandlung und Nachsorge</li>
            </ul>
          </div>
          <div>
            <h4>Für Praxisteam & MFA</h4>
            <ul>
              <li>Endourologie-Video-Turm</li>
              <li>Laser-System</li>
              <li>Spüllösungen-Logistik und Aufbereitung</li>
              <li>C-Bogen (z. B. URS)</li>
            </ul>
          </div>
        </div>
        <FachbereichCalculator
          pauschalen={[
            { label: `L06Z – TUR-P – ${formatEuro(2400)}`, value: 2400 },
            { label: `L17C – Harnstein – ${formatEuro(1750)}`, value: 1750 },
          ]}
        />
      </div>
    ),
  },
  {
    id: 'gefaesschirurgie',
    title: 'Gefäßchirurgie (Varizen)',
    subtitle: 'F39Z – Varizen',
    content: (
      <div className="accordion-content">
        <p>
          Varizen-Eingriffe sind gut standardisierbar und erlauben eine klare Planung von Material
          und OP-Zeiten.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Ärztinnen & Ärzte</h4>
            <ul>
              <li>Hohe Patientenzufriedenheit durch kurze Aufenthalte</li>
              <li>Therapie in vertrauter Praxisumgebung</li>
              <li>Kurze Rekonvaleszenz</li>
            </ul>
          </div>
          <div>
            <h4>Für Praxisteam & MFA</h4>
            <ul>
              <li>Duplex-Sonographie</li>
              <li>Laser/RF-Generator</li>
              <li>Tumeszenz-Pumpe</li>
              <li>Steriles Setup mit standardisierten Sets</li>
            </ul>
          </div>
        </div>
        <FachbereichCalculator
          pauschalen={[{ label: `F39Z – Varizen – ${formatEuro(1100)}`, value: 1100 }]}
        />
      </div>
    ),
  },
  {
    id: 'gynaekologie',
    title: 'Gynäkologie (LASH & Mamma)',
    subtitle: 'N04Z – LASH | J16Z – Mamma',
    content: (
      <div className="accordion-content">
        <p>
          Vertrauensbasierte Versorgung und investitionsintensive Instrumente erfordern verlässliche
          Prozessketten und eine ruhige OP-Logistik.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Ärztinnen & Ärzte</h4>
            <ul>
              <li>Ruhige, vertraute Umgebung für sensible Indikationen</li>
              <li>Schonende minimal-invasive Verfahren mit klarer Selektion</li>
              <li>Planbare Nachsorge und kurze Wege</li>
            </ul>
          </div>
          <div>
            <h4>Für Praxisteam & MFA</h4>
            <ul>
              <li>Laparoskopie-Turm</li>
              <li>Morcellator & Instrumente</li>
              <li>Uterus-Manipulator</li>
              <li>Separater Aufwachbereich</li>
            </ul>
          </div>
        </div>
        <FachbereichCalculator
          pauschalen={[
            { label: `N04Z – LASH – ${formatEuro(2900)}`, value: 2900 },
            { label: `J16Z – Mamma – ${formatEuro(2100)}`, value: 2100 },
          ]}
        />
      </div>
    ),
  },
  {
    id: 'hno',
    title: 'HNO (Septum/NNH & Radiofrequenz)',
    subtitle: 'D30Z – Septum/NNH',
    content: (
      <div className="accordion-content">
        <p>
          Standardisierte Eingriffe mit klaren Hygiene- und Lagerungsstandards ermöglichen eine
          effiziente OP-Planung.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Ärztinnen & Ärzte</h4>
            <ul>
              <li>Ruhige Umgebung ohne Klinikbelastung</li>
              <li>Kurze Terminfenster mit planbaren OP-Zeiten</li>
              <li>Schonende RF-Verfahren strukturiert integrierbar</li>
            </ul>
          </div>
          <div>
            <h4>Für Praxisteam & MFA</h4>
            <ul>
              <li>HNO-Turm & Shaver</li>
              <li>RF-Generator</li>
              <li>Endoskope/Mikroskop</li>
              <li>TIVA-Anästhesie</li>
            </ul>
          </div>
        </div>
        <FachbereichCalculator
          pauschalen={[{ label: `D30Z – Septum/NNH – ${formatEuro(1650)}`, value: 1650 }]}
        />
      </div>
    ),
  },
  {
    id: 'handchirurgie',
    title: 'Handchirurgie (Rhizarthrose)',
    subtitle: 'I32F – Rhizarthrose',
    content: (
      <div className="accordion-content">
        <p>
          Ambulante Spezialversorgung mit hoher Routine, kurzen Wegen und klarer Instrumentenlogik
          stärkt die Ergebnisqualität.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Ärztinnen & Ärzte</h4>
            <ul>
              <li>Regionale Anästhesie effizient einsetzbar</li>
              <li>Kurze OP-Zeiten und zügige Nachsorge</li>
              <li>Ruhiges Setting für präzise Eingriffe</li>
            </ul>
          </div>
          <div>
            <h4>Für Praxisteam & MFA</h4>
            <ul>
              <li>Mini-C-Bogen</li>
              <li>Hand-Tisch</li>
              <li>Mikro-Instrumentarium</li>
              <li>Tourniquet</li>
            </ul>
          </div>
        </div>
        <FachbereichCalculator
          pauschalen={[{ label: `I32F – Rhizarthrose – ${formatEuro(1450)}`, value: 1450 }]}
        />
      </div>
    ),
  },
  {
    id: 'fusschirurgie',
    title: 'Fußchirurgie (Hallux Valgus)',
    subtitle: 'I20E – Hallux Valgus',
    content: (
      <div className="accordion-content">
        <p>
          Häufige Eingriffe, bei denen Qualität, Prozesssicherheit und eine stringente
          Standardisierung entscheidend sind.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Ärztinnen & Ärzte</h4>
            <ul>
              <li>Ambulante Versorgung ohne stationäre Belastung</li>
              <li>Minimal-invasive Optionen planbar integrierbar</li>
              <li>Nachsorge aus einer Hand</li>
            </ul>
          </div>
          <div>
            <h4>Für Praxisteam & MFA</h4>
            <ul>
              <li>Mini-C-Bogen</li>
              <li>Power-Tools</li>
              <li>Röntgendurchlässiger Tisch</li>
              <li>Sterilgut-Management</li>
            </ul>
          </div>
        </div>
        <FachbereichCalculator
          pauschalen={[{ label: `I20E – Hallux Valgus – ${formatEuro(1600)}`, value: 1600 }]}
        />
      </div>
    ),
  },
  {
    id: 'proktologie',
    title: 'Proktologie (Hämorrhoiden)',
    subtitle: 'G23B – Hämorrhoiden',
    content: (
      <div className="accordion-content">
        <p>
          Diskretion, planbare Abläufe und ein ruhiges Setting sind zentrale Erfolgsfaktoren für
          diese Eingriffe.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Ärztinnen & Ärzte</h4>
            <ul>
              <li>Diskrete Versorgung in vertrauter Umgebung</li>
              <li>Kurze Eingriffe mit schneller Entlassung</li>
              <li>Kontinuität in Betreuung und Nachsorge</li>
            </ul>
          </div>
          <div>
            <h4>Für Praxisteam & MFA</h4>
            <ul>
              <li>Steinschnittlagerung</li>
              <li>Rektoskopie-Instrumente</li>
              <li>Stapler-Systeme</li>
              <li>Hygienekonzept</li>
            </ul>
          </div>
        </div>
        <FachbereichCalculator
          pauschalen={[{ label: `G23B – Hämorrhoiden – ${formatEuro(1300)}`, value: 1300 }]}
        />
      </div>
    ),
  },
  {
    id: 'allgemeinchirurgie',
    title: 'Allgemeinchirurgie (Metallentfernung)',
    subtitle: 'I98C – Metallentfernung',
    content: (
      <div className="accordion-content">
        <p>
          Routineeingriffe mit klaren Prozessen, hoher Planbarkeit und effizienter Instrumentenlogik
          sind ideal für den ambulanten OP.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Ärztinnen & Ärzte</h4>
            <ul>
              <li>Planbare OP-Zeiten und klare Indikationswege</li>
              <li>Kurze Wege mit hoher Patientenzufriedenheit</li>
              <li>Unkomplizierte Nachsorgeprozesse</li>
            </ul>
          </div>
          <div>
            <h4>Für Praxisteam & MFA</h4>
            <ul>
              <li>C-Bogen</li>
              <li>Schraubendreher-Sets</li>
              <li>Standard-OP-Tisch</li>
              <li>Logistik für Explantate</li>
            </ul>
          </div>
        </div>
        <FachbereichCalculator
          pauschalen={[
            { label: `I98C – Metallentfernung – ${formatEuro(800)}`, value: 800 },
            { label: `I98C – Metallentfernung – ${formatEuro(1000)}`, value: 1000 },
          ]}
        />
      </div>
    ),
  },
  {
    id: 'gastroenterologie',
    title: 'Gastroenterologie (ERCP & Koloskopie)',
    subtitle: 'H41N/M – ERCP & Koloskopie',
    content: (
      <div className="accordion-content">
        <p>
          Kombination aus hDRG-Eingriffen und hohem EBM/GOÄ-Volumen verlangt eine sichere
          Aufbereitungs- und Prozesslogik.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Ärztinnen & Ärzte</h4>
            <ul>
              <li>Ruhige Sedierung in vertrauter Umgebung</li>
              <li>Diskrete Vorsorge mit hoher Akzeptanz</li>
              <li>Kurze Aufenthaltsdauer und klare Nachsorge</li>
            </ul>
          </div>
          <div>
            <h4>Für Praxisteam & MFA</h4>
            <ul>
              <li>Endoskopie-Turm</li>
              <li>Aufbereitung (RDG-E)</li>
              <li>CO2-Insufflator</li>
              <li>Notfall-Set</li>
            </ul>
          </div>
        </div>
        <FachbereichCalculator
          pauschalen={[{ label: `H41N/M – ERCP & Koloskopie – ${formatEuro(1650)}`, value: 1650 }]}
        />
      </div>
    ),
  },
]

function FachbereichePage() {
  const baseUrl = import.meta.env.BASE_URL
  const doctorImage = `${baseUrl}DoctorTablet.jpg`

  return (
    <div className="page">
      <section className="section fach-hero">
        <div className="container split">
          <div>
            <p className="eyebrow">Fachbereiche</p>
            <h1>Fachbereiche für den ambulanten OP-Betrieb</h1>
            <p className="hero-lead">
              Für Ärztinnen und Ärzte, Praxisteam und MFA: 12 Fachbereiche mit typischen
              hDRG-Eingriffen, Pauschalen, Team-Checklisten und einer integrierten OP-Kalkulation pro
              Fachbereich – kompakt, praxisnah und sofort nutzbar.
            </p>
            <div className="hero-actions">
              {specialties.map((specialty) => (
                <a className="button secondary" key={specialty.title} href={`#${specialty.id}`}>
                  {specialty.title.split(' (')[0]}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-visuals">
            <div
              className="hero-photo"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(15, 93, 100, 0.22), rgba(42, 169, 160, 0.12)), url('${doctorImage}')`,
              }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" id="accordion">
          <Accordion items={specialties} />
        </div>
      </section>
    </div>
  )
}

export default FachbereichePage
