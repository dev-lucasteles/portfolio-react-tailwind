import React from 'react';
import CardsTech from './card-tecnologias';
import FadeInSection from './FadeInSection';


const cardsTech = [
  {
    img: "/public/assets/tecnologias/html5.png",
    alt: "html5",
    title: "HTML5",
  },
  {
    img: "/public/assets/tecnologias/css3.png",
    alt: "css3",
    title: "CSS3",
  },
  {
    img: "/public/assets/tecnologias/javascript.png",
    alt: "javascript",
    title: "JavaScript",
  },
  {
    img: "/public/assets/tecnologias/java.png",
    alt: "java",
    title: "Java",
  },
  {
    img: "/public/assets/tecnologias/Python.png",
    alt: "python",
    title: "Python",
  }
  
];


export default function Tecnologias() {

    return (
      <section id="tecnologias" className="bg-gray-950 py-20 ">
        <FadeInSection>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 animate-blurred-fade-in">Tecnologias</h1> {/*[cite: 1] */}
          <h2 className="text-lg text-red-400 font-medium animate-blurred-fade-in">Essas são as tecnologias que eu tenho conhecimento:</h2> {/*[cite: 1] */}
        </div>
        <div className="flex-col items-center space-y-8" >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {cardsTech.map((card, index) => (
                <CardsTech
                  key={card.title}
                  title={card.title}
                  img={card.img}
                  alt={card.alt}
                  />
                ))}
          </div>
        </div>
        </FadeInSection>
      </section>
    );
}