import React from 'react';
import logo from './logo.svg';
import './App.css';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <nav className='bg-dark p-3'>
          <a className='text-white text-decoration-none p-3' href='/'>Catálogo</a>
          <a className='text-white text-decoration-none p-3' href='/dados'>Novo</a>
        </nav>
        <Routes>
          <Route path='/' element={LivroLista()} />
          <Route path='dados' element={LivroDados()} />
        </Routes>
    </BrowserRouter>
  ) 
}

export default App;
