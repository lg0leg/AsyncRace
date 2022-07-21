import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/garage" className="nav-item">
          Garage
        </NavLink>
        <NavLink to="/winners" className="nav-item">
          Winners
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
