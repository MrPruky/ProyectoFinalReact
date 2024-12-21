import React from 'react';
import Nosotros from '../components/Nosotros';
import Productos from '../components/Productos';
import Contactanos from '../components/Contactanos';
import '../styles/styles.css';
import products from '../data/products';

const Home = () => {
  return (
    <main>
      <Nosotros />
      <Productos productos={products} />
      <Contactanos />
    </main>
  );
};

export default Home;
