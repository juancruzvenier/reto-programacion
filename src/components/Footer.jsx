import React from 'react';
import '../styles/Footer.css'; // Importa el CSS del Footer

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Santiago Suena. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">Twitter</a>
        </div>
        <p>Alumnos del ITSE | Desarrollado para la materia de Programación III.</p>
      </div>
    </footer>
  );
};

export default Footer;