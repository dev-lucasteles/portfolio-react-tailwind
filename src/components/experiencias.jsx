import React from 'react';
import CardsExp from './cards-experiencias';
import FadeInSection from './FadeInSection';

const cardsExp = [
    {
    cargo: "Monitor de entretenimento",
    empresa: "Búzios Beach Resort",
    tempo: "Novembro 2022 - atualmente",
    descrição: "Experiência em organização de operações e suporte técnico \nMontagem e operação de equipamentos de som e iluminação \n Suporte técnico em eventos e atividades diversas"
    },
    {
    cargo: "Estagiário de suporte N1 de T.i",
    empresa: "Grupo RioMais",
    tempo: "Junho 2026 - atualmente",
    descrição: "Triagem inicial de chamados (tickets), resolvendo problemas simples e padronizados usando scripts e manuais, e encaminhando demandas complexas para os níveis superiores (N2 ou N3)"
    },

];


export default function Experiencias() {

    return (
        <section id="experiencias" className="bg-gray-950 py-20 ">
        <FadeInSection>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-2 animate-blurred-fade-in">Experiências</h1> {/*[cite: 1] */}
            </div>
            <div className="flex-col items-center space-y-8" >
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {cardsExp.map((card) => (
                    <CardsExp
                        key={card.cargo}
                        cargo={card.cargo}
                        empresa={card.empresa}
                        tempo={card.tempo}
                        descrição={card.descrição}
                    />
                    ))}
                </div>
            </div>
        </FadeInSection>
        </section>
    );
}