import RevenueCalculator from '../components/RevenueCalculator'

const patientBenefits = [
  'Vertraute Versorgung und persönlicher Kontakt',
  'Kürzere Wege, weniger Wartezeit',
  'Ruhigeres Umfeld ohne Klinikbetrieb',
  'Schnelle Rückkehr in den Alltag',
]

const requirements = [
  'Planbare OP-Prozesse und klare Zuständigkeiten',
  'Verlässliche Material- und Logistikkette',
  'Standardisierte Abläufe für MFA und Team',
  'Transparente Kostenstruktur bei Verbrauchsmaterialien',
]

function PraxisPage() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <RevenueCalculator />
        </div>
      </section>

      <section className="section muted">
        <div className="container grid-2">
          <div>
            <h2>Patientenvorteile im ambulanten Setting</h2>
            <ul className="list">
              {patientBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Was Praxen benötigen</h2>
            <ul className="list">
              {requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PraxisPage
