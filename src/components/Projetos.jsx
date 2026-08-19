import React from 'react';
import CardsProjetos from './cards-projetos';
import FadeInSection from './FadeInSection';

const cards = [
  {
    img: "",
    alt: "projeto1",
    title: "Cadastro Usuário - CRUD",
    subtitle: "API RESTful simples para gerenciamento de usuários, desenvolvida em Java com o framework Spring Boot",
    link: "https://github.com/dev-lucasteles/cadastro-usuario-CRUD"
  },
  {
    img: "/assets/projetos/totemMais.png",
    alt: "projeto2",
    title: "Totem de suporte",
    subtitle: "Totem de atendimento para abertura de chamados desenvolvido em Java com o framework Spring Boot, utilizando o banco de dados MySQL.",
    link: "https://github.com/dev-lucasteles/totem-autoatendimento"
  },
  {
    img: "/assets/projetos/gerenciadorDeEstoque.png",
    alt: "projeto3",
    title: "Sistema de gerenciamento de materiais",
    subtitle: "Sistema CRUD desenvolvido em Python com o framework matplotlib, numpy e banco de dados SQLite3.",
    link: "https://github.com/dev-lucasteles/sistema-gerenciamento-de-materiais"
  }
];

export default function Projetos() {

  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const fecharModal = () => setProjetoSelecionado(null);

  return (
    <section id="projetos" className="bg-gray-950 py-12 md:py-20">
      <FadeInSection>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Cabeçalho */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Projetos</h1>
            <h2 className="text-base sm:text-lg text-red-400 font-medium px-2">
              Esses são os projetos que eu estou desenvolvendo:
            </h2>
          </div>

          {/* Grid dos Cards de Projetos */}
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
      {/* 
        Layer / Modal
      */}
      {projetoSelecionado && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity"
          onClick={fecharModal}
        >
          <div 
            className="relative w-full max-w-2xl rounded-2xl bg-gray-800 p-6 sm:p-8 shadow-2xl border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de Fechar */}
            <button
              onClick={fecharModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Fechar modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col items-center">
              {projetoSelecionado.img && (
                <img
                  src={projetoSelecionado.img}
                  alt={projetoSelecionado.alt}
                  className="w-full h-48 sm:h-64 object-cover rounded-xl mb-6 shadow-md"
                />
              )}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
                {projetoSelecionado.title}
              </h3>
              <p className="text-gray-300 text-center mb-8">
                {projetoSelecionado.subtitle}
              </p>
              
              {/* Botão com o link o projeto */}
              <a
                href={projetoSelecionado.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-red-500/30"
              >
                Acessar Repositório
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}