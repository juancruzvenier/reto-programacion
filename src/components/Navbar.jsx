import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Importa el CSS específico para Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Santiago Suena</Link>
        <ul className="navbar-nav">
          <li>
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li>
            <Link to="/artistas" className="nav-link">Artistas</Link>
          </li>
          <li>
            <Link to="/cronograma" className="nav-link">Cronograma</Link>
          </li>
          <li>
            <Link to="/entradas" className="nav-link">Entradas</Link>
          </li>
          <li>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;