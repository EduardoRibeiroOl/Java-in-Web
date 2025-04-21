import { useEffect, useState } from 'react';

export default function Pessoas() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/pessoas")
      .then(res => res.json())
      .then(data => setPessoas(data));
  }, []);

  return (
    <div>
      <h2>Lista de Pessoas</h2>
      <ul>
        {pessoas.map(p => (
          <li key={p.id}>{p.nome} - {p.idade}</li>
        ))}
      </ul>
    </div>
  );
}
