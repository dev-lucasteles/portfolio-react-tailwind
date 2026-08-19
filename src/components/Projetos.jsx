import React, { useState } from 'react';
import CardsProjetos from './cards-projetos';
import FadeInSection from './FadeInSection';

const cards = [
  {
    img: "",
    alt: "projeto1",
    title: "Cadastro Usuário - CRUD",
    subtitle: "API RESTful simples para gerenciamento de usuários...",
    description: "Cadastro Usuário é uma aplicação desenvolvida para gerenciar dados de forma simples e eficiente. Obtendo dados em tempo real, permite a criação, leitura, atualização e exclusão de usuários com total segurança.",
    tools: [
      "Java",
      "Spring Boot",
      "MySQL",
      "JPA / Hibernate",
      "Postman"
    ],
    date: "10 de Janeiro de 2024",
    linkProjeto: "https://seu-link-do-projeto.com",
    linkRepo: "https://github.com/dev-lucasteles/cadastro-usuario-CRUD",
    linkLinkedin: "https://linkedin.com/in/seu-perfil"
  },
  {
    img: "/assets/projetos/totemMais.png",
    alt: "projeto2",
    title: "Totem de suporte",
    subtitle: "Totem de atendimento para abertura de chamados desenvolvido em Java com o framework Spring Boot, utilizando o banco de dados MySQL.",
    linkRepo: "https://github.com/dev-lucasteles/totem-autoatendimento"
  },
  {
    img: "/assets/projetos/gerenciadorDeEstoque.png",
    alt: "projeto3",
    title: "Sistema de gerenciamento de materiais",
    subtitle: "Sistema CRUD desenvolvido em Python com o framework matplotlib, numpy e banco de dados SQLite3.",
    linkRepo: "https://github.com/dev-lucasteles/sistema-gerenciamento-de-materiais"
  }
];

export default function Projetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  const fecharModal = () => setProjetoSelecionado(null);

  return (
    <section id="projetos" className="bg-gray-950 py-12 md:py-20 relative">
      <FadeInSection>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Projetos</h1>
            <h2 className="text-base sm:text-lg text-red-400 font-medium px-2">
              Esses são os projetos que eu estou desenvolvendo:
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-stretch justify-items-center">
            {cards.map((card) => (
              <CardsProjetos
                key={card.title}
                title={card.title}
                img={card.img}
                alt={card.alt}
                subtitle={card.subtitle}
                onClick={() => setProjetoSelecionado(card)}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* NOVA ESTRUTURA DO MODAL */}
      {projetoSelecionado && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity overflow-y-auto"
          onClick={fecharModal}
        >
          {/* Container principal flex: coluna no celular */}
          <div 
            className="relative w-full max-w-5xl rounded-lg bg-[#121214] p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row gap-8 my-8"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Botão de Fechar */}
            <button
              onClick={fecharModal}
              className="absolute top-4 right-4 text-[#9f7aea] hover:text-[#b794f4] transition-colors z-10"
              aria-label="Fechar modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* COLUNA ESQUERDA: Imagem e Botões */}
            <div className="w-full md:w-3/5 flex flex-col">
              {/* Imagem do Projeto */}
              <div className="w-full bg-gray-800 rounded-md overflow-hidden min-h-[250px] mb-6 flex items-center justify-center">
                {projetoSelecionado.img ? (
                  <img
                    src={projetoSelecionado.img}
                    alt={projetoSelecionado.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">Imagem não disponível</span>
                )}
              </div>

              {/* Botões de Ação */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {projetoSelecionado.linkProjeto && (
                  <a href={projetoSelecionado.linkProjeto} target="_blank" rel="noopener noreferrer" 
                     className="bg-[#552c92] hover:bg-[#6b3bb8] text-white text-sm font-semibold py-2.5 px-4 rounded-md transition-colors text-center flex-grow sm:flex-grow-0">
                    Acessar projeto
                  </a>
                )}
                {projetoSelecionado.linkRepo && (
                  <a href={projetoSelecionado.linkRepo} target="_blank" rel="noopener noreferrer" 
                     className="bg-[#552c92] hover:bg-[#6b3bb8] text-white text-sm font-semibold py-2.5 px-4 rounded-md transition-colors text-center flex-grow sm:flex-grow-0">
                    Acessar repositório
                  </a>
                )}
                {projetoSelecionado.linkLinkedin && (
                  <a href={projetoSelecionado.linkLinkedin} target="_blank" rel="noopener noreferrer" 
                     className="bg-[#552c92] hover:bg-[#6b3bb8] text-white text-sm font-semibold py-2.5 px-4 rounded-md transition-colors text-center flex-grow sm:flex-grow-0">
                    Ver post no Linkedin
                  </a>
                )}
              </div>
            </div>

            {/* COLUNA DIREITA: Textos e Tecnologias */}
            <div className="w-full md:w-2/5 flex flex-col pt-2 md:pt-0">
              <h3 className="text-3xl font-bold text-[#9f7aea] mb-4 pr-6">
                {projetoSelecionado.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {projetoSelecionado.description || projetoSelecionado.subtitle}
              </p>

              <p className="text-gray-300 text-sm mb-4">
                Esse projeto foi desenvolvido com as seguintes ferramentas:
              </p>
              
              <ul className="text-gray-300 text-sm mb-8 space-y-1.5 flex-grow">
                {projetoSelecionado.tools ? (
                  projetoSelecionado.tools.map((tool, index) => (
                    <li key={index}>• {tool}</li>
                  ))
                ) : (
                  <li>• Ferramentas não detalhadas</li>
                )}
              </ul>

              {/* Data do projeto */}
              {projetoSelecionado.date && (
                <span className="text-[#9f7aea] text-sm font-medium mt-auto">
                  {projetoSelecionado.date}
                </span>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}