import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const DROPDOWNS = [
  { id: 'solution', label: 'Solution', links: [
    { to: '/solution/a-propos-de-realtimes', label: 'À propos' },
    { to: '/solution/logiciel-trs', label: 'La Solution RealTiMES' },
    { to: '/solution/votre-projet-mes', label: 'Votre projet MES' },
  ]},
  { id: 'ressources', label: 'Resources', links: [
    { to: '/ressources/blog', label: 'Blog RealTIMES' },
    { to: '/ressources/ebook', label: 'e-Book' },
    { to: '/ressources/media', label: 'Media' },
  ]},
  { id: 'clients', label: 'Clients', links: [
    { to: '/clients/temoignages', label: 'Témoignages' },
    { to: '/clients/cas-clients', label: 'Cas clients' },
  ]},
]

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef(null)

  const closeDropdown = () => setOpenDropdown(null)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeDropdown()
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const toggleDropdown = (id) => (e) => {
    e.stopPropagation()
    setOpenDropdown((prev) => (prev === id ? null : id))
  }

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev)

  return (
    <div className="navbar-no-shadow-2" ref={navRef}>
      <header data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" className="navbar-no-shadow-container-2 w-nav">
        <div className="container-regular-2">
          <div className="navbar-wrapper-2">
            <Link to="/" className="navbar-brand-2 w-nav-brand" onClick={closeMobileMenu}>
              <img src="/images/reproduction-logo.svg" loading="lazy" width="227" alt="Logo RealTiMES" />
            </Link>
            <nav
              role="navigation"
              className={`nav-menu-wrapper-2 w-nav-menu ${mobileMenuOpen ? 'w--open' : ''}`}
              data-nav-menu-open={mobileMenuOpen ? '' : undefined}
            >
              <ul className="nav-menu-4 w-list-unstyled">
                {DROPDOWNS.map((dropdown) => (
                  <li key={dropdown.id}>
                    <div className="nav-dropdown-2 w-dropdown">
                      <button
                        type="button"
                        className="nav-dropdown-toggle-2 w-dropdown-toggle"
                        onClick={toggleDropdown(dropdown.id)}
                        aria-expanded={openDropdown === dropdown.id}
                        aria-haspopup="true"
                      >
                        <div className="nav-dropdown-icon-2 w-icon-dropdown-toggle" />
                        <div className="text-block-12">{dropdown.label}</div>
                      </button>
                      <nav
                        className={`nav-dropdown-list-2 shadow-three mobile-shadow-hide w-dropdown-list ${openDropdown === dropdown.id ? 'w--open' : ''}`}
                      >
                        {dropdown.links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            className="nav-dropdown-link-2 w-dropdown-link"
                            onClick={() => { closeDropdown(); closeMobileMenu(); }}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </li>
                ))}
                <li />
                <li className="list-item-2">
                  <Link to="/tarif" className="nav-link-2" onClick={closeMobileMenu}>Tarif</Link>
                  <Link to="/contact" className="nav-link-2" onClick={closeMobileMenu}>Contact</Link>
                </li>
                <li className="mobile-margin-top-11">
                  <div className="nav-button-wrapper-2">
                    <Link to="/demander-une-demo" className="button w-button" onClick={closeMobileMenu}>
                      Demander une démo
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
            <button
              type="button"
              className={`menu-button-3 w-nav-button ${mobileMenuOpen ? 'w--open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-icon-nav-menu" />
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}
