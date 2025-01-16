import React from 'react';
import './style.css'; 
import '../default-style.css'; 
import background_effect from '../../media/background_light_1.png'
import constants_set from '../../constants/constants-page-one';

const Header = () => {
  return (
    <header>
      <div className="header" role="main_content_header" aria-label="Main header section">
        <div className="logo">
          <span className="logo-text" aria-label="Portfolio logo">{constants_set.title_dev}</span>
        </div>
        <img src={background_effect} class="header-background" loading="lazy"/>
        <div className="navigation-buttons">
          <div className="button-wrapper">
            <button className="nav-button" aria-label="View my history">{constants_set.button_nav_header_1}</button>
          </div>
          <div className="button-ready-container">
            <button className="nav-button" aria-label="View my projects">{constants_set.button_nav_header_2}</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
