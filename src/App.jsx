import React from 'react';
import Header from './components/Header';
import Apresentacao from './components/Apresentacao';
import Sobre from './components/Sobre';
import Tecnologias from './components/Tecnologias';
import Projetos from './components/Projetos';
import Rodape from './components/rodape';
import Experiencias from './components/Experiencias';
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#000000] text-gray-800 font-sans selection:bg-blue-200">
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
