
import React from 'react';

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-logo">
      </div>
      <ul className="menu-menu">
        <li className="menu-item">
          <a href="/#nosotros" className="menu-link">Nosotros</a>
        </li>
        <li className="menu-item">
          <a href="/#productos" className="menu-link">Productos</a>
        </li>
        <li className="menu-item">
          <a href="/#contactanos" className="menu-link">Contáctanos</a>
        </li>
        <li className="menu-item">
          <a href="/Dudas" className="menu-link">Dudas</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
