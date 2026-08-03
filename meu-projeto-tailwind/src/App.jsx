import React, { useState } from 'react';

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
            <img src="assets/icone 3.png" alt="Ícone Lucas" className="h-10 w-10 object-contain" /> {/* */}
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
      <section id="apresentacao" className="max-w-6xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Olá!<br /> {/*[cite: 1] */}
            Meu nome é Lucas<br /> {/*[cite: 1] */}
            e eu sou <br /> {/*[cite: 1] */}
            <span className="text-blue-600">Desenvolvedor web</span> {/*[cite: 1] */}
          </h1>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img 
            src="assets/perfil-hamster.png" 
            alt="lucas-perfil" 
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-white" 
          /> {/*[cite: 1] */}
        </div>
      </section>

      {/* ================= SOBRE MIM ================= */}
      <section id="sobre-mim" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Sobre mim</h1> {/*[cite: 1] */}
            <h2 className="text-xl text-blue-600 font-medium">Desenvolvedor iniciante apaixonado</h2> {/*[cite: 1] */}
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg text-justify md:text-left">
            <p>Meu nome é Lucas Teles de Sousa, mas pode me chamar de Aladin. Tenho 22 anos e sou apaixonado por T.I desde pequeno. Gosto de jogar, ir para praia e sempre aprender coisas novas, porém faço tudo isso enquanto ouço música!</p> {/*[cite: 1] */}
            <p>Estou há pouco mais de 1 mês estudando de forma intensiva sobre programação de interfaces com HTML, CSS e JavaScript.</p> {/*[cite: 1] */}
            <p>Estou fazendo minha graduação em Engenharia de Software pelo Centro Universitário Leonardo da Vinci.</p> {/*[cite: 1] */}
            <p>Meus interesses na área de programação a princípio são Front-End com HTML, CSS e JavaScript, porém futuramente pretendo aprender muito mais sobre área Back-end.</p> {/*[cite: 1] */}
            <p>No momento estou adquirando novos conhecimentos enquanto completo minha grade no Bacharelado.</p> {/*[cite: 1] */}
          </div>
        </div>
      </section>

      {/* ================= TECNOLOGIAS ================= */}
      <section id="tecnologias" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tecnologias que eu domino</h1> {/*[cite: 1] */}
          <h2 className="text-lg text-gray-500">Essas são as tecnologias que eu tenho conhecimento:</h2> {/*[cite: 1] */}
        </div>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <img src="assets/html5.png" alt="html-lucas" className="w-20 h-20 hover:-translate-y-2 transition-transform duration-300" /> {/*[cite: 1] */}
            <img src="assets/css3.png" alt="css-lucas" className="w-20 h-20 hover:-translate-y-2 transition-transform duration-300" /> {/*[cite: 1] */}
            <img src="assets/javascript.png" alt="js-lucas" className="w-20 h-20 hover:-translate-y-2 transition-transform duration-300" /> {/*[cite: 1] */}
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <img src="assets/logica.png" alt="logica-lucas" className="w-20 h-20 hover:-translate-y-2 transition-transform duration-300" /> {/*[cite: 1] */}
            <img src="assets/github_PNG40 .png" alt="github-logo" className="w-20 h-20 hover:-translate-y-2 transition-transform duration-300" /> {/*[cite: 1] */}
          </div>
        </div>
      </section>

      {/* ================= PROJETOS ================= */}
      <section id="projetos" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Projetos</h1>
            <h2 className="text-lg text-gray-500">Esses são os projetos que eu estou desenvolvendo:</h2>
          </div>

          {/* Aqui está o segredo: Removi a divisão de 2 colunas e deixei a vitrine usar o espaço total */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>

              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                <a href="#" className="group">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7P9NiruM4qUZmpH-Hnyl31gDc2mts429qxU2IkTBWJg&s=10" alt="HTML" className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
                  <h3 className="text-center mt-4 text-lg font-bold text-black-700">Estrutura de site</h3>
                  <p className="text-center mt-1 text-lg font-medium text-gray-900">HTML</p>
                </a>
                <a href="#" className="group">
                  <img src="https://shanelonergan.github.io/assets/img/css.png" alt="Paper card sitting upright in walnut card holder on desk." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
                  <h3 className="text-center mt-4 text-lg font-bold text-black-700">Porfolio</h3>
                  <p className="text-center mt-1 text-lg font-medium text-gray-900">CSS</p>
                </a>
                <a href="#" className="group">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/500px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript" className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
                  <h3 className="text-center mt-4 text-lg font-bold text-black-700">Site MAIS</h3>
                  <p className="text-center mt-1 text-lg font-medium text-gray-900">JavaScript</p>
                </a>
                <a href="#" className="group">
                  <img src="https://hermes.dio.me/articles/cover/7b89fda2-4af3-4ae0-98bc-ad2b65854909.png" alt="java" className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
                  <h3 className="text-center mt-4 text-lg font-bold text-black-700">Projeto de banco</h3>
                  <p className="text-center mt-1 text-lg font-medium text-gray-900">Java</p>
                </a>
                <a href="#" className="group">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png" alt="Python" className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
                  <h3 className="text-center mt-4 text-lg font-bold text-black-700"> Gerenciador de estoque</h3>
                  <p className="text-center mt-1 text-lg font-medium text-gray-400">Python</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}