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
    img: "",
    alt: "projeto2",
    title: "Totem de suporte",
    subtitle: "Totem de atendimento para abertura de chamados desenvolvido em Java com o framework Spring Boot, utilizando o banco de dados MySQL.",
    link: "https://github.com/dev-lucasteles/totem-autoatendimento"
  },
  {
    img: "",
    alt: "projeto3",
    title: "Sistema de gerenciamento de materiais",
    subtitle: "Sistema CRUD desenvolvido em Python com o framework matplotlib, numpy e banco de dados SQLite3.",
    link: "https://github.com/dev-lucasteles/sistema-gerenciamento-de-materiais"
  }
];

export default function Projetos() {
    return (
    <section id="projetos" className="py-20 bg-gray-950">
      <FadeInSection>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">Projetos</h1>
            <h2 className="text-lg text-red-400 font-medium">Esses são os projetos que eu estou desenvolvendo:</h2>
          </div>
          <div className="bg-gray-950 rounded-2xl">
            <div className="mx-auto max-w-full">
            <div className="content-center grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </div>
        </FadeInSection>
      </section>
    );
}