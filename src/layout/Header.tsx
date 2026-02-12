import { Link, NavLink } from 'react-router-dom'

function Header() {
  const logoUrl = `${import.meta.env.BASE_URL}hdrg_kompass.svg`
  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" to="/">
          <img className="brand-logo" src={logoUrl} alt="hDRG-Kompass Logo" />
          <span>hDRG-Kompass.de</span>
        </Link>
        <nav className="nav">
          <NavLink to="/" end>
            Start
          </NavLink>
          <NavLink to="/hybrid-drg">Hybrid-DRG</NavLink>
          <NavLink
            to="/fachbereiche"
            className={({ isActive }) => (isActive ? 'nav-chip active' : 'nav-chip')}
          >
            Fachbereiche
          </NavLink>
          <NavLink to="/customer-access">Customer Access</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </nav>
        <NavLink className="nav-cta" to="/fachbereiche">
          Zu den Fachbereichen
        </NavLink>
      </div>
    </header>
  )
}

export default Header
