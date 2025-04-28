import { useEffect, useState } from 'react';

export default function Pessoas() {
  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/login")
      .then(res => {
        if (!res.ok) {
          throw new Error("Erro ao buscar dados do servidor");
        }
        return res.json();
      })
      .then(data => {
        setPessoas(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro na requisição:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando pessoas...</p>;
  }

  return (
    <div>
      <h2>Lista de Pessoas</h2>
      <ul>
        {pessoas.map(pessoa => (
          <li key={pessoa.id}>
            {pessoa.nome} - {pessoa.idade} anos
          </li>
        ))}
      </ul>
    </div>
  );
}
