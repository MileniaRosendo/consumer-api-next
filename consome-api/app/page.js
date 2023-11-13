// ./app/page.js
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

const URL_API = 'https://jsonplaceholder.typicode.com/todos';

const Home = () => {
  const [loading, setLoading] = useState(false);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL_API);
      const data = await response.json();
      console.log(response.status, data );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  // Adicionando useClient diretamente na função do componente
  Home.useClient = true;

  return (
    <div className={styles.description}>
      <p>requisição em uma api com next.js</p>
    </div>
  );
};

export default Home;
