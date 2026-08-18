import React from 'react';
import CardsContatos from './cards-contacts';
import FadeInSection from './FadeInSection';

const cardsContatos = [
  {
    img: "/assets/sociais/telefone.png",
    alt: "telefone",
    topico: "Telefone",
    contato: "22 99915-1985",
    link: "https://api.whatsapp.com/send?phone=5522999151985"
  },
  {
    img: "/assets/sociais/github.png",
    alt: "github",
    topico: "Github",
    contato: "dev-lucasteles",
    link: "https://github.com/dev-lucasteles"
  },
  {
    img: "/assets/sociais/email.png",
    alt: "email",
    topico: "E-mail",
    contato: "lucas.teles@gruporiomais.com.br",
    link: "mailto:lucas.teles@gruporiomais.com.br"
  },
  {
    img: "/assets/sociais/linkedin.png",
    alt: "linkedin",
    topico: "Linked-In",
    contato: "@lucas-teles-rj",
    link: "https://www.linkedin.com/in/lucas-teles-rj/"
  },
  ]

export default function Rodape() {

    return (
    <footer id="rodape" className="py-20 bg-gray-950">
      <FadeInSection>
      <div className= "max-w-5xl mx-auto px-4">
      <div className="text-center mb-40">
          <h1 className="text-5xl font-bold text-white mb-2 ">Contatos</h1> {/*[cite: 1] */}
        </div>
      </div>
      <div className="mx-auto max-w-4xl flex-col justify-center space-y-12" >
                <div className="flex flex-wrap justify-center md:gap-1">
                  {cardsContatos.map((card) => (
                      <CardsContatos
                        key={card.topico}
                        topico={card.topico}
                        img={card.img}
                        alt={card.alt}
                        contato={card.contato}
                        link={card.link}
                        />
                      ))}
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
        </FadeInSection>     
</footer>
    );
}
