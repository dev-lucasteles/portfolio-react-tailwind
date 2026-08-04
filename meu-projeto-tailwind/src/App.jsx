import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Portfolio() {
  // Estado para controlar a abertura do menu no celular
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Adicionei font-sans para usar a fonte padrão (você pode configurar Poppins no tailwind.config.js)
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-200">
      
      {/* ================= HEADER ================= */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="https://storage.googleapis.com/ecdt-logos/12186635000104/mais_assistencial_12186635.webp" alt="logo" className="h-20 w-20 object-contain" /> {/* */}
          </div>
          
          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre-mim" className="font-medium hover:text-blue-600 transition-colors">Sobre</a> {/*[cite: 1] */}
            <a href="#tecnologias" className="font-medium hover:text-blue-600 transition-colors">Tecnologias</a> {/*[cite: 1] */}
            <a href="#projetos" className="font-medium hover:text-blue-600 transition-colors">Projetos</a> {/*[cite: 1] */}
            <a href="#contatos" className="font-medium hover:text-blue-600 transition-colors">Contato</a> {/*[cite: 1] */}
          </nav>

          {/* Redes Sociais Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/luquitas-lab" target="_blank" rel="noreferrer"> {/*[cite: 1] */}
              <img src="assets/github.png" alt="github Lucas" className="h-6 w-6 hover:scale-110 transition-transform" /> {/*[cite: 1] */}
            </a>
            <a href="https://www.instagram.com/teles.jpg/" target="_blank" rel="noreferrer"> {/*[cite: 1] */}
              <img src="assets/Instagram.png" alt="instagram Lucas" className="h-6 w-6 hover:scale-110 transition-transform" /> {/*[cite: 1] */}
            </a>
            <a href="https://www.linkedin.com/in/lucas-teles-794a11335/" target="_blank" rel="noreferrer"> {/*[cite: 1] */}
              <img src="assets/linked in.png" alt="LinkedIn Lucas" className="h-6 w-6 hover:scale-110 transition-transform" /> {/*[cite: 1] */}
            </a>
          </div>

          {/* Ícone Menu Mobile */}
          <div 
            className="md:hidden text-2xl cursor-pointer" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776; {/*[cite: 1] */}
          </div>
        </div>

        {/* Menu Mobile Expandido */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t flex flex-col px-4 py-4 space-y-4 shadow-inner">
            <a href="#sobre-mim" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Sobre</a>
            <a href="#tecnologias" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Tecnologias</a>
            <a href="#projetos" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Projetos</a>
            <a href="#contatos" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Contato</a>
          </div>
        )}
      </header>

      {/* ================= APRESENTAÇÃO ================= */}
      <section className="py-20 bg-gray-900">
  <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
    
    {/* FILHO 1: Caixa de Texto */}
    <div className="text-center md:text-left flex-1">
      <h1 className="text-4xl mt-3 md:text-5xl font-bold leading-tight text-white">
        Olá!<br />
        Meu nome é Lucas<br />
        e eu sou <br />
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-red-400">
        <TypeAnimation 
          sequence={[ 
            'Estagiário de T.I', 
            1000,
            'Suporte de T.I', 
            1000, 
            'Desenvolvedor', 
            1000, 
            'Recreador', 
            1000 
          ]} 
          wrapper="span" 
          speed={50} 
          style={{ display: 'inline-block' }} 
          repeat={Infinity} 
          
        />
        
      </h1>
    </div>

    <div className="flex-1 flex justify-center md:justify-end items-center">
      <img 
        src="https://gerarmemes.s3.us-east-2.amazonaws.com/galeria/thumb/meme-323-cachorro-enrolado-gerador-de-memes.webp"
        alt="lucas-perfil" 
        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-white" 
      />
    </div>

  </div>
</section>

      {/* ================= SOBRE MIM ================= */}
      <section id="sobre-mim" className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-3">
          <div className="text-center mb-10">
            <h1 className="text-7xl font-bold text-white mb-2">Sobre mim</h1> {/*[cite: 1] */}
            <h2 className="text-2xl text-red-400 font-medium">Desenvolvedor  web iniciante</h2> {/*[cite: 1] */}
          </div>
          <div className="space-y-3 text-white leading-none text-lg text-justify md:text-left ">
            <p className = "font-sans text-justify text-4xl font-base text-white">Sou estudante de Engenharia de Software e atuo na área de Suporte de TI.</p> {/*[cite: 1] */}
            <p className = "font-sans text-justify text-4xl font-base text-white">Possuo experiência prática com infraestrutura, redes e troubleshooting, combinada a conhecimentos em programação com Java, Python, HTML, CSS, JavaScript e MySQL.</p> {/*[cite: 1] */}
            <p className = "font-sans text-justify mt-3 text-4xl font-base text-white">Sou focado na resolução de problemas e busco aplicar minha base operacional para evoluir no desenvolvimento de software.</p> {/*[cite: 1] */}
          </div>
        </div>
      </section>

      {/* ================= TECNOLOGIAS ================= */}
      <section id="tecnologias" className="bg-gray-900 py-20">
        <div className="text-center mb-12">
          <h1 className="text-7xl font-bold text-white mb-2">Tecnologias</h1> {/*[cite: 1] */}
          <h2 className="text-2xl text-red-400 font-medium">Essas são as tecnologias que eu tenho conhecimento:</h2> {/*[cite: 1] */}
        </div>
        
        <div className="flex-col items-center space-y-8" >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png" className="w-40 h-40  hover:-translate-y-2 transition-transform duration-300" />
            <img src="https://static.vecteezy.com/system/resources/previews/066/386/006/non_2x/the-css-logo-icon-free-png.png" className="w-40 h-40 hover:-translate-y-2 transition-transform duration-300" /> {/*[cite: 1] */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/500px-Unofficial_JavaScript_logo_2.svg.png" className="w-40 h-40 hover:-translate-y-2 transition-transform duration-300" /> {/*[cite: 1] */}
            <img src="https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-icone-da-linguagem-de-programacao-java.png" alt="java" className="w-40 h-40  hover:-translate-y-2 transition-transform duration-300" /> {/*[cite: 1] */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/960px-Python-logo-notext.svg.png" alt="python-logo" className="w-40 h-40  hover:-translate-y-2 transition-transform duration-300" /> {/*[cite: 1] */}
          </div>
        </div>
      </section>

      {/* ================= PROJETOS ================= */}
      <section id="projetos" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-7xl font-bold text-white mb-2">Projetos</h1>
            <h2 className="text-2xl text-red-400 font-medium">Esses são os projetos que eu estou desenvolvendo:</h2>
          </div>

          
          <div className="bg-gray-900 rounded-2xl shadow-sm border border-gray-900">
            <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>

              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">


                {/* HTML - Estrutura de site*/}
                <a href="#" className="group">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7P9NiruM4qUZmpH-Hnyl31gDc2mts429qxU2IkTBWJg&s=10" alt="HTML" className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
                  <h3 className="text-center mt-4 text-4xl font-medium text-red-400">Estrutura de site</h3>
                  <p className="text-center mt-4 text-2xl font-medium text-red-400">HTML</p>
                </a>


                {/* Portfolio */}
                <a href="#" className="group">
                  <img src="https://shanelonergan.github.io/assets/img/css.png" alt="Paper card sitting upright in walnut card holder on desk." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
                  <h3 className="text-center mt-4 text-4xl font-medium text-red-400">Portfólio</h3>
                  <p className="text-center mt-4 text-2xl font-medium text-red-400">CSS</p>
                </a>


                {/* Site MAIS - JavaScript */}
                <a href="#" className="group">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/500px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript" className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
                  <h3 className="text-center mt-4 text-4xl font-medium text-red-400">Site MAIS</h3>
                  <p className="text-center mt-4 text-2xl font-medium text-red-400">JavaScript</p>
                </a>

                {/* Projeto banco java */}
                <a href="#" className="group">
                  <img src="https://hermes.dio.me/articles/cover/7b89fda2-4af3-4ae0-98bc-ad2b65854909.png" alt="java" className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
                  <h3 className="text-center mt-4 text-4xl font-medium text-red-400">Projeto de banco</h3>
                  <p className="text-center mt-4 text-2xl font-medium text-red-400">Java</p>
                </a>


                {/* Gerenciador de estoque */}
                <a href="#" className="group">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png" alt="Python" className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
                  <h3 className="text-center mt-4 text-4xl font-medium text-red-400"> Gerenciador de estoque</h3>
                  <p className="text-center mt-4 text-2xl font-medium text-red-400">Python</p>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}