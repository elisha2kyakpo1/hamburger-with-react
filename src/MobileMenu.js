import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './MobileMenu.css';

const MobileMenu = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  let menu;
  if (displayMenu) {
    menu = <div className="navbar">
      <ul className="nav-links">
      <li>
        Home
      </li>
      <li>
        Careers
      </li>
      <li>
        About us
      </li>
    </ul>
    </div>
  }
  return (
    <nav className="nav">
      <h2 className="logo">Welcome to home page</h2>
      <div className="menu-bars">
        <FontAwesomeIcon icon={faBars} onClick={() => setDisplayMenu(!displayMenu)} />
      </div>
      { menu }
    </nav>
  )
}

export default MobileMenu;
