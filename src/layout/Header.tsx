import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

type NavItem = {
  to: string
  label: string
  end?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Start', end: true },
  { to: '/hybrid-drg', label: 'Hybrid-DRG' },
  { to: '/customer-access', label: 'Praxis Organisation' },
  { to: '/kontakt', label: 'Kontakt' },
]

function Header() {
  const [openedOnLocationKey, setOpenedOnLocationKey] = useState<string | null>(null)
  const location = useLocation()
  const logoUrl = `${import.meta.env.BASE_URL}hdrg_kompass.svg`
  const isMenuOpen = openedOnLocationKey === location.key

  const closeMenu = () => {
    setOpenedOnLocationKey(null)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleMenu = () => {
    setOpenedOnLocationKey((currentKey) => (currentKey === location.key ? null : location.key))
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 721px)')
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setOpenedOnLocationKey(null)
      }
    }

    mediaQuery.addEventListener('change', handleViewportChange)
    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange)
    }
  }, [])

  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" to="/">
          <img className="brand-logo" src={logoUrl} alt="hDRG-Kompass Logo" />
          <span>hDRG-Kompass.de</span>
        </Link>
        <nav className="nav" aria-label="Hauptnavigation">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink className="nav-cta desktop-cta" to="/fachbereiche" onClick={scrollToTop}>
          Zu den Fachbereichen
        </NavLink>
        <button
          className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-panel"
          onClick={toggleMenu}
        >
          <span className="menu-toggle-text">Menü</span>
          <span className="menu-toggle-icon" aria-hidden="true" />
        </button>
      </div>
      <div className={`mobile-nav-shell${isMenuOpen ? ' is-open' : ''}`} aria-hidden={!isMenuOpen}>
        <div className="container">
          <nav className="mobile-nav" id="mobile-nav-panel" aria-label="Hauptnavigation">
            <NavLink
              className="nav-cta mobile-nav-cta"
              to="/fachbereiche"
              onClick={() => {
                closeMenu()
                scrollToTop()
              }}
            >
              Zu den Fachbereichen
            </NavLink>
            {NAV_ITEMS.map((item) => (
              <NavLink key={`mobile-${item.to}`} to={item.to} end={item.end} onClick={closeMenu}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
