import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/styles.css';
import Dudas from './pages/Dudas';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Menu />asdas
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dudas" element={<Dudas />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
