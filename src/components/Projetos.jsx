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
                link={card.link}
              />
            ))}
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}