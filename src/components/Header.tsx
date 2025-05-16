import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Shield size={24} />
          <span>ForexLab</span>
        </div>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
            <li><a href="#brokerlar" onClick={() => setMenuOpen(false)}>Forex Şirketleri</a></li>
            <li><a href="#faq" onClick={() => setMenuOpen(false)}>SSS</a></li>
            <li><a href="#iletisim" onClick={() => setMenuOpen(false)}>İletişim</a></li>
          </ul>
        </nav>
        <button className={`menu-toggle ${menuOpen ? 'toggle-active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;