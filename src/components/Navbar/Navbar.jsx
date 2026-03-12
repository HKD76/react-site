import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="navbar" ref={navbarRef}>
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <img src="/images/reproduction-logo.svg" alt="RealTiMES" />
        </Link>

        <nav className={`nav ${mobileOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="dropdown">
              <button onClick={() => toggleDropdown("solution")}>
                Solution
              </button>
              <ul
                className={`dropdown-menu ${openDropdown === "solution" ? "show" : ""}`}
              >
                <li>
                  <Link to="/solution/a-propos-de-realtimes">À propos</Link>
                </li>
                <li>
                  <Link to="/solution/logiciel-trs">La solution RealTiMES</Link>
                </li>
                <li>
                  <Link to="/solution/votre-projet-mes">Votre projet MES</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <button onClick={() => toggleDropdown("ressources")}>
                Ressources
              </button>
              <ul
                className={`dropdown-menu ${openDropdown === "ressources" ? "show" : ""}`}
              >
                <li>
                  <Link to="/ressources/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/ressources/ebook">eBook</Link>
                </li>
                <li>
                  <Link to="/ressources/media">Media</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/tarif">Tarif</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Link to="/demander-une-demo" className="btn-demo">
            Demander une démo
          </Link>
        </nav>

        <button className="mobile-toggle" onClick={toggleMobile}>
          ☰
        </button>
      </div>
    </header>
  );
}
