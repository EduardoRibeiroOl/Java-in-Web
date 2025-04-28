import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Nomes from './routes/Nomes';
import Pessoas from './routes/Pessoas';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/search">Buscar</Link> | 
          <Link to="/login">Pessoas</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Nomes />} />
          <Route path="/login" element={<Pessoas />} />
        </Routes>
      </div>
    </Router>
  );
}
