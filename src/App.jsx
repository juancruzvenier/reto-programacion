import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Schedule from './pages/Schedule';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importa el Footer
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Tu barra de navegación global */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artistas" element={<Artists />} />
        <Route path="/cronograma" element={<Schedule />} />
        <Route path="/entradas" element={<Tickets />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer /> {/* Agrega el Footer aquí */}
    </Router>
  );
}

export default App;