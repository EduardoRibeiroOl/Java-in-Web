import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Nomes from './Nomes';
import Pessoas from './Pessoas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nomes" element={<Nomes />} />
        <Route path="/pessoas" element={<Pessoas />} />
      </Routes>
    </Router>    
  );
}

export default App;

