import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">hDRG-Kompass.de</div>
          <p className="footer-note">Neutrale Informationsplattform zu Hybrid-DRG für Praxen.</p>
        </div>
        <div className="footer-links">
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
