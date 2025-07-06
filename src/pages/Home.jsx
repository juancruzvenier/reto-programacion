import React from 'react';
import '../styles/Home.css';

// Importa las imágenes de la galería desde la carpeta assets
import chaquenoGalleryImg from '../assets/Chaqueno.jpg';
import escenarioGalleryImg from '../assets/escenario.jpg';
import festivalGalleryImg from '../assets/festival.jpg';
import lucesGalleryImg from '../assets/luces.jpg';
import publicoGalleryImg from '../assets/publico.jpeg';
import ralySoleGalleryImg from '../assets/raly-sole.jpg';


const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Santiago Suena</h1>
      <p className="home-description">
        ¡Una experiencia musical única con artistas locales y nacionales que hará vibrar Santiago del Estero!
      </p>

      {/* Video Promocional */}
      <div className="section-promo-video">
        <h2 className="section-title">Video Promocional</h2>
        <div className="video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/av9XDsFRDOE?si=4DX04NtABWJZLXlE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      {/* Géneros Musicales */}
      <div className="section-genres">
        <h2 className="section-title">Géneros Musicales Presentes</h2>
        <ul className="genre-list">
          <li className="genre-item genre-item-1">Folklore</li>
          <li className="genre-item genre-item-2">Rock Nacional</li>
          <li className="genre-item genre-item-3">Cumbia Santiagueña</li>
          <li className="genre-item genre-item-4">Pop Latino</li>
          <li className="genre-item genre-item-5">Electrónica</li>
          <li className="genre-item genre-item-6">Jazz Fusión</li>
        </ul>
      </div>

      {/* Galería de Fotos */}
      <div className="section-gallery">
        <h2 className="section-title">Momentos Inolvidables</h2>
        <div className="gallery-grid">
          {/* Usa las imágenes importadas aquí */}
          <img src={escenarioGalleryImg} alt="Escenario del evento" className="gallery-img" />
          <img src={publicoGalleryImg} alt="Público disfrutando" className="gallery-img" />
          <img src={ralySoleGalleryImg} alt="Raly Barrionuevo y La Sole en vivo" className="gallery-img" />
          <img src={lucesGalleryImg} alt="Luces y sonido del festival" className="gallery-img" />
          <img src={chaquenoGalleryImg} alt="El Chaqueño Palavecino en el escenario" className="gallery-img" />
          <img src={festivalGalleryImg} alt="Vista general del festival" className="gallery-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;