import React from 'react';
import FadeInSection from './FadeInSection';

export default function Sobre() {

    return (
    <section id="sobre-mim" className="bg-gray-950 py-20">
      <FadeInSection>
        <div className="max-w-6xl mx-auto px-3">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white mb-2">Sobre mim</h1> {/*[cite: 1] */}
            <h2 className="text-lg text-red-400 font-medium">Desenvolvedor  web iniciante</h2> {/*[cite: 1] */}
          </div>
          <div className="mx-auto space-y-3 text-white leading-none text-lg text-justify md:text-left ">
            <p className = "w-200 mx-auto gap-8 font-sans text-justify text-2xl text-normal text-white">
              Sou estudante de Engenharia de Software e atuo na área de Suporte de TI.<br/>
              Possuo experiência prática com infraestrutura, redes e troubleshooting, combinada a conhecimentos em programação com Java, Python, HTML, CSS, JavaScript e MySQL.<br/>
              Sou focado na resolução de problemas e busco aplicar minha base operacional para evoluir no desenvolvimento de software.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>
    );
}