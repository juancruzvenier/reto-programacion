import React from 'react';
import '../styles/Artists.css';

// Importa las imágenes de los artistas desde la carpeta assets
import laSoleImg from '../assets/artists/sole.jpg';
import elChaquenoImg from '../assets/artists/chaque.jpg';
import ralyImg from '../assets/artists/raly.jpg';
import losManserosImg from '../assets/artists/manseros.jpg';
import mirandaImg from '../assets/artists/miranda.jpeg';
import djLeoLencinaImg from '../assets/artists/leolencina.jpg';

const artistsData = [
  {
    id: 1,
    name: 'La Sole Pastorutti',
    genre: 'Folklore / Pop',
    description: 'La voz inconfundible del folklore argentino, La Sole trae su energía arrolladora y sus clásicos que te harán bailar y emocionar.',
    image: laSoleImg, // Usa la imagen importada
  },
  {
    id: 2,
    name: 'El Chaqueño Palavecino',
    genre: 'Folklore Tradicional',
    description: 'Un verdadero ícono de la música popular, el Chaqueño nos deleitará con su carisma y los grandes éxitos del folklore.',
    image: elChaquenoImg, // Usa la imagen importada
  },
  {
    id: 3,
    name: 'Raly Barrionuevo',
    genre: 'Folklore de Autor',
    description: 'Desde Frías, Santiago del Estero, Raly nos conmueve con sus letras profundas y melodías arraigadas en la tierra, una experiencia única.',
    image: ralyImg, // Usa la imagen importada
  },
  {
    id: 4,
    name: 'Los Manseros Santiagueños',
    genre: 'Folklore Tradicional Santiagueño',
    description: 'Los embajadores de la chacarera, un pilar fundamental de nuestra cultura. Sus voces y guitarras nos transportarán a la esencia santiagueña.',
    image: losManserosImg, // Usa la imagen importada
  },
  {
    id: 5,
    name: 'Miranda!',
    genre: 'Pop Electrónico',
    description: 'Para los más jóvenes, Miranda! promete una fiesta pop llena de hits, brillo y la energía inconfundible que los caracteriza.',
    image: mirandaImg, // Usa la imagen importada
  },
  {
    id: 6,
    name: 'DJ Leo Lencina',
    genre: 'Electrónica / Cachengue',
    description: 'El encargado de cerrar la noche con la mejor selección de música electrónica y cachengue para que la fiesta no pare hasta el amanecer.',
    image: djLeoLencinaImg, // Usa la imagen importada
  },
];

const Artists = () => {
  return (
    <div className="artists-container">
      <h1 className="artists-title">Nuestros Artistas</h1>
      <div className="artists-grid">
        {artistsData.map((artist) => (
          <div key={artist.id} className="artist-card">
            <img
              src={artist.image} // Aquí se usa la ruta de la imagen importada
              alt={artist.name}
              className="artist-image"
            />
            <h2 className="artist-name">{artist.name}</h2>
            <p className="artist-genre">{artist.genre}</p>
            <p className="artist-description">{artist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;