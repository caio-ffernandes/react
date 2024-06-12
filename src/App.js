import logo from './logo.svg';
import './App.css';
import { Header,Navigation,Footer, Content } from './Componentes/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react-router-dom';
import Home from './pages/Home'
import Contato from './pages/Contato'
import Mapa from './pages/Mapa'
import Sobre from './pages/Sobre'

function App() {
  return (
    <BrowserRouter>
    <>
  <Header />
  <Navigation />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Contato" element={<Contato />}/>
    <Route path="/Mapa" element={<Mapa />}/>
    <Route path="/Sobre" element={<Sobre />}/>
  </Routes>
  <Footer />
   </>
   </BrowserRouter>
  );
}

export default App;
