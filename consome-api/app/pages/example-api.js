// pages/api-example.js
import React, { useState, useEffect } from 'react';

const ApiExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    // Chamar a função para buscar dados da API
    fetchData();
  }, []); // O array vazio assegura que o efeito só é executado uma vez após a montagem do componente

  return (
    <div>
      <h1>Exemplo de Consumo de API com Next.js</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiExample;
