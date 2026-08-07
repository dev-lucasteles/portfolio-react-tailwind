import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import FadeInSection from './FadeInSection';

export default function Apresentacao() {
    const [mostrarCargos, setMostrarCargos] = useState(false);

    return (
    <section className="py-20 bg-gray-950">
      <FadeInSection>
  <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
    <div>
      <h1 className="text-4xl mt-3 md:text-5xl font-bold leading-tight text-white">
        <TypeAnimation
          sequence={[
            'Olá!\nMeu nome é Lucas\ne eu sou\n',
            () => setMostrarCargos(true)
          ]}
          wrapper="span"
          speed={50}
          cursor={false}
          style={{ whiteSpace: 'pre-line', display: 'block' }}
        />
      </h1>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-red-400 min-h-[60px]">
        {mostrarCargos && (
          <TypeAnimation
            sequence={[
              'Estagiário de T.I',
              1000,
              'Suporte de T.I',
              1000,
              'Desenvolvedor',
              1000,
              'Recreador',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        )}
      </h1>
    </div>

    <div className="flex-1 flex justify-center md:justify-end items-center">
      <img
        src="/public/assets/perfil-lucas.jpg"
        alt="lucas-perfil"
        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-white" 
      />
    </div>

  </div>
  </FadeInSection>
</section>
    );
}