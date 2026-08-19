import React from 'react';
import Header from './components/Header';
import Apresentacao from './components/Apresentacao';
import Sobre from './components/Sobre';
import Tecnologias from './components/Tecnologias';
import Projetos from './components/Projetos';
import Rodape from './components/Rodape';
import Experiencias from './components/Experiencias';
export default function Portfolio() {
  return (
    <div className="selection:bg-gray-300 selection:text-black font-sans text-xl text-gray-300">
      <Header />
      <Apresentacao />
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Experiencias />
      <Rodape />
    </div>
  );
}
