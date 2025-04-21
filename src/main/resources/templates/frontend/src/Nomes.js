import { useEffect, useState } from 'react';

export default function Nomes() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/nomes")
      .then(res => res.json())
      .then(data => setNomes(data));
  }, []);

  return (
    <div>
      <h2>Lista de Nomes</h2>
      <ul>
        {nomes.map((n, i) => <li key={i}>{n.nome}</li>)}
      </ul>
    </div>
  );
}
