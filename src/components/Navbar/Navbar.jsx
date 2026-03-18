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
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  return (
    <header className="navbar" ref={navbarRef}>
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <img src="/images/reproduction-logo.svg" alt="RealTiMES" />
        </Link>

        <nav className={`nav ${mobileOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li
              className={`dropdown ${openDropdown === "solution" ? "open" : ""}`}
            >
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown("solution")}
              >
                <span>Solution</span>
                <div className="dropdown-arrow">
                  <img src="/images/arrow.svg" alt="" />
                </div>
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
            <li
              className={`dropdown ${openDropdown === "ressources" ? "open" : ""}`}
            >
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown("ressources")}
              >
                <span>Ressources</span>
                <div className="dropdown-arrow">
                  <img src="/images/arrow.svg" alt="" />
                </div>
              </button>
              <ul
                className={`dropdown-menu ${openDropdown === "ressources" ? "show" : ""}`}
              >
                <li>
                  <Link to="/ressources/ebook">eBook</Link>
                </li>
                <li>
                  <Link to="/ressources/media">Media</Link>
                </li>
              </ul>
            </li>
            <li
              className={`dropdown ${openDropdown === "clients" ? "open" : ""}`}
            >
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown("clients")}
              >
                <span>Clients</span>
                <div className="dropdown-arrow">
                  <img src="/images/arrow.svg" alt="" />
                </div>
              </button>
              <ul
                className={`dropdown-menu ${openDropdown === "clients" ? "show" : ""}`}
              >
                <li>
                  <Link to="/clients/temoignages">Témoignages</Link>
                </li>
                <li>
                  <Link to="/clients/cas-clients">Cas clients</Link>
                </li>
              </ul>
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
