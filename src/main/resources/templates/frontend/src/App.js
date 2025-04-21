import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Nomes from './Nomes';
import Pessoas from './Pessoas';

function App() {
  return (
    <Router>
      <nav>
        <ul style={{ display: "flex", gap: "1rem" }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nomes">Nomes</Link></li>
          <li><Link to="/pessoas">Pessoas</Link></li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nomes" element={<Nomes />} />
        <Route path="/pessoas" element={<Pessoas />} />
      </Routes>
    </Router>
  );
}

export default App;

