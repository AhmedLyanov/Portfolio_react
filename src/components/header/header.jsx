import React from 'react';
import { Link } from 'react-router-dom'; 
import './style.css';
import '../default-style.css';
import background_effect from '../../media/background_light_1.png';
import constants_set from '../../constants/constants-page-one';

const Header = () => {
  return (
    <header>
      <div className="header" role="main_content_header" aria-label="Main header section">
        <div className="logo">
          <span className="logo-text" aria-label="Portfolio logo">{constants_set.title_dev}</span>
        </div>
        <img src={background_effect} className="header-background" loading="lazy" alt="Background effect" />
        <div className="navigation-buttons">
          <div className="button-wrapper">
            <Link to="/"> 
              <button className="nav-button" aria-label="View my history">{constants_set.button_nav_header_1}</button>
            </Link>
          </div>
          <div className="button-ready-container">
            <Link to="/logo"> 
              <button className="nav-button" aria-label="View my projects">{constants_set.button_nav_header_2}</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;