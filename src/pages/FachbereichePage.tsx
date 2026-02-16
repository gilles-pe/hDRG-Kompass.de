import Accordion, { type AccordionItem } from '../components/Accordion'
import HybridDrgCalculator from '../components/HybridDrgCalculator'
import { hybridDrgProcedures, type HybridDrgProcedure } from '../data/hybridDrgProcedures'

type SectionKey =
  | 'kardiologie'
  | 'orthopaedie'
  | 'viszeralchirurgie'
  | 'urologie'
  | 'gefaesschirurgie'
  | 'gynaekologie'
  | 'hno'
  | 'proktologie'
  | 'gastroenterologie'
  | 'weitere'

const categoryToSection: Record<string, SectionKey> = {
  Kardiologie: 'kardiologie',
  'Kardiologie/Gefäßchirurgie': 'gefaesschirurgie',
  Orthopädie: 'orthopaedie',
  'Orthopädie/Fußchirurgie': 'orthopaedie',
  'Orthopädie/Handchirurgie': 'orthopaedie',
  'Orthopädie/Traumatologie': 'orthopaedie',
  Viszeralchirurgie: 'viszeralchirurgie',
  Allgemeinchirurgie: 'viszeralchirurgie',
  'Allgemeinchirurgie/Hernien': 'viszeralchirurgie',
  Urologie: 'urologie',
  Gynäkologie: 'gynaekologie',
  Gastroenterologie: 'gastroenterologie',
  Proktologie: 'proktologie',
}

function getSectionKey(category: string): SectionKey {
  return categoryToSection[category] ?? 'weitere'
}

function groupProceduresBySection(procedures: HybridDrgProcedure[]) {
  const grouped: Record<SectionKey, HybridDrgProcedure[]> = {
    kardiologie: [],
    orthopaedie: [],
    viszeralchirurgie: [],
    urologie: [],
    gefaesschirurgie: [],
    gynaekologie: [],
    hno: [],
    proktologie: [],
    gastroenterologie: [],
    weitere: [],
  }

  procedures.forEach((procedure) => {
    grouped[getSectionKey(procedure.category)].push(procedure)
  })

  return grouped
}

const proceduresBySection = groupProceduresBySection(hybridDrgProcedures)

const specialties: AccordionItem[] = [
  {
    id: 'kardiologie',
    title: 'Kardiologie (PCI & Schrittmacher)',
    subtitle: 'Hybrid-DRG-Katalog 2025/2026',
    content: (
      <div className="accordion-content">
        <p>
          Ambulante Interventionen sind klinisch etabliert; im Praxis-OP profitieren Sie von klaren
          Abläufen, verlässlichen Sachkosten und einer konsistenten Patientenführung.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Patienten</h4>
            <ul>
              <li>Kontinuierliche Patientenführung ohne Klinikbruch</li>
              <li>Planbare Terminierung und kurze Wege</li>
              <li>Reduzierte Liegezeiten, höhere Patientensicherheit</li>
            </ul>
          </div>
          <div>
            <h4>Notwendige Ausstattung</h4>
            <ul>
              <li>Angiographie-Anlage (LHK)</li>
              <li>Monitoring- und Notfall-Setup</li>
              <li>Strahlenschutz- und Dokumentationsstandard</li>
              <li>Programmiergeräte für Schrittmacher</li>
            </ul>
          </div>
        </div>
        <HybridDrgCalculator
          procedures={proceduresBySection.kardiologie}
          calculatorId="kardiologie"
          calculatorLabel="Kardiologie (PCI & Schrittmacher)"
        />
      </div>
    ),
  },
  {
    id: 'orthopaedie',
    title: 'Orthopädie & Sportmedizin (Knie, Schulter, Hand & Fuß)',
    subtitle: 'Hybrid-DRG-Katalog 2025/2026',
    content: (
      <div className="accordion-content">
        <p>
          Hohe Fallzahlen in Knie-, Schulter-, Hand- und Fußchirurgie verlangen eine saubere
          Standardisierung der Instrumente, Sets und OP-Zeiten. Das schafft messbare Effizienz,
          Ergebnisqualität und kalkulierbare Materialkosten.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Patienten</h4>
            <ul>
              <li>Breites Spektrum von Knie/Schulter bis Hand/Fuß aus einer Hand</li>
              <li>Hohe Routine und reproduzierbare Ergebnisse</li>
              <li>Schnelle Mobilisation, kurze Erholungszeiten und klare Nachsorge</li>
            </ul>
          </div>
          <div>
            <h4>Notwendige Ausstattung</h4>
            <ul>
              <li>Arthroskopie-Turm</li>
              <li>Fluid-Management</li>
              <li>Shaver- und RF-Systeme</li>
              <li>Standardisierte Lagerung</li>
              <li>Mini-C-Bogen & Hand-Tisch</li>
              <li>Power-Tools & röntgendurchlässiger Tisch</li>
            </ul>
          </div>
        </div>
        <HybridDrgCalculator
          procedures={proceduresBySection.orthopaedie}
          calculatorId="orthopaedie"
          calculatorLabel="Orthopädie & Sportmedizin (Knie, Schulter, Hand & Fuß)"
        />
      </div>
    ),
  },
  {
    id: 'viszeralchirurgie',
    title: 'Viszeralchirurgie (Hernien & Galle)',
    subtitle: 'Hybrid-DRG-Katalog 2025/2026',
    content: (
      <div className="accordion-content">
        <p>
          Volumenstarke Eingriffe profitieren von standardisierten OP-Abläufen, klaren
          Materialkörben und strikter Kostenkontrolle.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Patienten</h4>
            <ul>
              <li>Planbare OP-Termine ohne Klinikverschiebung</li>
              <li>Kontinuierliche Betreuung in vertrauter Umgebung</li>
              <li>Moderne Recovery- und Nachsorgeprozesse</li>
            </ul>
          </div>
          <div>
            <h4>Notwendige Ausstattung</h4>
            <ul>
              <li>Laparoskopie-Turm & CO2-Insufflator</li>
              <li>HF-Chirurgie</li>
              <li>MIC-Instrumente</li>
              <li>Standardisiertes Narkose-Setup</li>
            </ul>
          </div>
        </div>
        <HybridDrgCalculator
          procedures={proceduresBySection.viszeralchirurgie}
          calculatorId="viszeralchirurgie"
          calculatorLabel="Viszeralchirurgie (Hernien & Galle)"
        />
      </div>
    ),
  },
  {
    id: 'urologie',
    title: 'Urologie (TUR-P & Harnstein)',
    subtitle: 'Hybrid-DRG-Katalog 2025/2026',
    content: (
      <div className="accordion-content">
        <p>
          Endourologische Eingriffe werden durch stabile Logistik, sichere Prozessketten und moderne
          Technik besonders effizient.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Patienten</h4>
            <ul>
              <li>Diskrete Versorgung in vertrauter Struktur</li>
              <li>Planbare Abläufe ohne Klinikverschiebung</li>
              <li>Kontinuität in Behandlung und Nachsorge</li>
            </ul>
          </div>
          <div>
            <h4>Notwendige Ausstattung</h4>
            <ul>
              <li>Endourologie-Video-Turm</li>
              <li>Laser-System</li>
              <li>Spüllösungen-Logistik und Aufbereitung</li>
              <li>C-Bogen (z. B. URS)</li>
            </ul>
          </div>
        </div>
        <HybridDrgCalculator
          procedures={proceduresBySection.urologie}
          calculatorId="urologie"
          calculatorLabel="Urologie (TUR-P & Harnstein)"
        />
      </div>
    ),
  },
  {
    id: 'gefaesschirurgie',
    title: 'Gefäßchirurgie (Varizen)',
    subtitle: 'Hybrid-DRG-Katalog 2025/2026',
    content: (
      <div className="accordion-content">
        <p>
          Varizen-Eingriffe sind gut standardisierbar und erlauben eine klare Planung von Material
          und OP-Zeiten.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Patienten</h4>
            <ul>
              <li>Hohe Patientenzufriedenheit durch kurze Aufenthalte</li>
              <li>Therapie in vertrauter Praxisumgebung</li>
              <li>Kurze Rekonvaleszenz</li>
            </ul>
          </div>
          <div>
            <h4>Notwendige Ausstattung</h4>
            <ul>
              <li>Duplex-Sonographie</li>
              <li>Laser/RF-Generator</li>
              <li>Tumeszenz-Pumpe</li>
              <li>Steriles Setup mit standardisierten Sets</li>
            </ul>
          </div>
        </div>
        <HybridDrgCalculator
          procedures={proceduresBySection.gefaesschirurgie}
          calculatorId="gefaesschirurgie"
          calculatorLabel="Gefäßchirurgie (Varizen)"
        />
      </div>
    ),
  },
  {
    id: 'gynaekologie',
    title: 'Gynäkologie (LASH & Mamma)',
    subtitle: 'Hybrid-DRG-Katalog 2025/2026',
    content: (
      <div className="accordion-content">
        <p>
          Vertrauensbasierte Versorgung und investitionsintensive Instrumente erfordern verlässliche
          Prozessketten und eine ruhige OP-Logistik.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Patienten</h4>
            <ul>
              <li>Ruhige, vertraute Umgebung für sensible Indikationen</li>
              <li>Schonende minimal-invasive Verfahren mit klarer Selektion</li>
              <li>Planbare Nachsorge und kurze Wege</li>
            </ul>
          </div>
          <div>
            <h4>Notwendige Ausstattung</h4>
            <ul>
              <li>Laparoskopie-Turm</li>
              <li>Morcellator & Instrumente</li>
              <li>Uterus-Manipulator</li>
              <li>Separater Aufwachbereich</li>
            </ul>
          </div>
        </div>
        <HybridDrgCalculator
          procedures={proceduresBySection.gynaekologie}
          calculatorId="gynaekologie"
          calculatorLabel="Gynäkologie (LASH & Mamma)"
        />
      </div>
    ),
  },
  {
    id: 'hno',
    title: 'HNO (Septum/NNH & Radiofrequenz)',
    subtitle: 'Hybrid-DRG-Katalog 2025/2026',
    content: (
      <div className="accordion-content">
        <p>
          Standardisierte Eingriffe mit klaren Hygiene- und Lagerungsstandards ermöglichen eine
          effiziente OP-Planung.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Patienten</h4>
            <ul>
              <li>Ruhige Umgebung ohne Klinikbelastung</li>
              <li>Kurze Terminfenster mit planbaren OP-Zeiten</li>
              <li>Schonende RF-Verfahren strukturiert integrierbar</li>
            </ul>
          </div>
          <div>
            <h4>Notwendige Ausstattung</h4>
            <ul>
              <li>HNO-Turm & Shaver</li>
              <li>RF-Generator</li>
              <li>Endoskope/Mikroskop</li>
              <li>TIVA-Anästhesie</li>
            </ul>
          </div>
        </div>
        <HybridDrgCalculator
          procedures={proceduresBySection.hno}
          calculatorId="hno"
          calculatorLabel="HNO (Septum/NNH & Radiofrequenz)"
        />
      </div>
    ),
  },
  {
    id: 'proktologie',
    title: 'Proktologie (Fisteln & Rekonstruktion)',
    subtitle: 'Hybrid-DRG-Katalog 2025/2026',
    content: (
      <div className="accordion-content">
        <p>
          Diskretion, planbare Abläufe und ein ruhiges Setting sind zentrale Erfolgsfaktoren für
          diese Eingriffe.
        </p>
        <div className="accordion-columns">
          <div>
            <h4>Nutzen für Patienten</h4>
            <ul>
              <li>Diskrete Versorgung in vertrauter Umgebung</li>
              <li>Kurze Eingriffe mit schneller Entlassung</li>
              <li>Kontinuität in Betreuung und Nachsorge</li>
            </ul>
          </div>
          <div>
            <h4>Notwendige Ausstattung</h4>
            <ul>
              <li>Steinschnittlagerung</li>
              <li>Rektoskopie-Instrumente</li>
              <li>Stapler-Systeme</li>
              <li>Hygienekonzept</li>
            </ul>
          </div>
        </div>
        <HybridDrgCalculator
          procedures={proceduresBySection.proktologie}
          calculatorId="proktologie"
          calculatorLabel="Proktologie (Fisteln & Rekonstruktion)"
        />
      </div>
    ),
  },
  {
    id: 'gastroenterologie',
    title: 'Gastroenterologie (ERCP & Koloskopie)',
    subtitle: 'Hybrid-DRG-Katalog 2025/2026',
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
        <HybridDrgCalculator
          procedures={proceduresBySection.gastroenterologie}
          calculatorId="gastroenterologie"
          calculatorLabel="Gastroenterologie (ERCP & Koloskopie)"
        />
      </div>
    ),
  },
]

if (proceduresBySection.weitere.length) {
  specialties.push({
    id: 'weitere',
    title: 'Weitere Fachbereiche',
    subtitle: 'Hybrid-DRG-Katalog 2025/2026',
    content: (
      <div className="accordion-content">
        <p>
          Weitere Hybrid-DRG-Codes aus dem Katalog 2025/2026, die nicht eindeutig einem der
          Hauptfachbereiche zugeordnet werden konnten.
        </p>
        <HybridDrgCalculator
          procedures={proceduresBySection.weitere}
          calculatorId="weitere"
          calculatorLabel="Weitere Fachbereiche"
        />
      </div>
    ),
  })
}

function FachbereichePage() {
  const baseUrl = import.meta.env.BASE_URL
  const doctorImage = `${baseUrl}Stock.jpg`

  return (
    <div className="page">
      <section className="section fach-hero">
        <div className="container split fach-hero-layout">
          <div className="fach-hero-copy">
            <p className="eyebrow">Fachbereiche</p>
            <h1>Fachbereiche für den ambulanten OP-Betrieb</h1>
            <p className="hero-lead">
              Diese fachspezifische Aufarbeitung unterstützt Ärztinnen, Ärzte und MFA bei der
              strukturierten planung ambulanter Eingriffe. Sie umfasst 12 Fachbereiche inklusive
              relevanter hDRG-Eingriffe, Pauschalen und Checklisten. Eine OP-Kalkulation 
              dient dabei als Grundlage für die betriebswirtschaftliche
              Planung im Praxisalltag.
            </p>
            <p className="muted">
              Die Nutzung dieser Unterlagen sowie die Umsetzung der Kalkulationen erfolgen
              eigenverantwortlich; eine Haftung für Richtigkeit oder Vollständigkeit kann nicht übernommen werden.
              Für weiterführende Details oder bei spezifischen Rückfragen können Sie sich jederzeit
              unverbindlich informieren. Wir stehen Ihnen für einen fachlichen Austausch und zur
              Klärung Ihrer Fragen gerne zur Verfügung.
            </p>
            <div className="fach-hero-meta">
              <span>12 Fachbereiche</span>
              <span>hDRG-Katalog 2025/2026</span>
              <span>inkl. OP-Kalkulation</span>
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
          <p className="global-disclaimer">
            Hinweis: Alle Werte basieren auf der Fallpauschalenverordnung 2026 (Anlage 1a).
            Änderungen, Irrtümer und Übertragungsfehler vorbehalten. Die finale Abrechnung erfordert
            eine korrekte medizinische Kodierung (OPS/ICD).
          </p>
        </div>
      </section>
    </div>
  )
}

export default FachbereichePage
