import { Link } from 'react-router-dom'

function KontaktPage() {
  return (
    <div className="page">
      <section className="section">
        <div className="container narrow">
          <h1>Kontakt</h1>
          <p>
            Sie haben Fragen zu Hybrid-DRG oder möchten Inhalte ergänzen? Schreiben Sie uns gerne.
          </p>
          <form
            className="form"
            action="mailto:info@hdrg-kompass.de"
            method="post"
            encType="text/plain"
          >
            <label className="field">
              <span>Name</span>
              <input type="text" placeholder="Ihr Name" required />
            </label>
            <label className="field">
              <span>E-Mail</span>
              <input type="email" placeholder="name@praxis.de" required />
            </label>
            <label className="field">
              <span>Nachricht</span>
              <textarea rows={5} placeholder="Ihre Nachricht" required />
            </label>
            <button className="button primary" type="submit">
              Nachricht senden
            </button>
          </form>
          <div className="partner-access-link">
            <Link to="/partner-access">Partner Access</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KontaktPage
