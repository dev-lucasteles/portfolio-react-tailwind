// components/Header.jsx
import React, { useState } from 'react'; // Import simplificado

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex-shrink-0 text-xl border-b-4 border-transparent transition-colors duration-300 hover:border-[#7d0000] font-medium hover:text-[#7d0000] transition-colors items-left">
                    <h2 class="#sobre-mim">Lucas Teles de Sousa</h2>
                </div>

                {/* Botão Mobile */}
                <button
                    className="md:hidden p-2 text-gray-600 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {/* Ícone de Menu */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Menu Desktop */}
                <nav className="hidden md:flex space-x-20 px-16">
                    <a href="#sobre-mim" className="text-xl border-b-4 border-transparent transition-colors duration-300 hover:border-[#7d0000] font-medium hover:text-[#7d0000] transition-colors">Sobre</a>
                    <a href="#tecnologias" className="text-xl border-b-4 border-transparent transition-colors duration-300 hover:border-[#7d0000] font-medium hover:text-[#7d0000] transition-colors">Tecnologias</a>
                    <a href="#projetos" className="text-xl border-b-4 border-transparent transition-colors duration-300 hover:border-[#7d0000] font-medium hover:text-[#7d0000] transition-colors">Projetos</a>
                    <a href="#experiencias" className="text-xl border-b-4 border-transparent transition-colors duration-300 hover:border-[#7d0000] font-medium hover:text-[#7d0000] transition-colors">Experiências</a>
                    <a href="#rodape" className="text-xl border-b-4 border-transparent transition-colors duration-300 hover:border-[#7d0000] font-medium hover:text-[#7d0000] transition-colors">Contatos</a>
                </nav>
            </div>

            {/* Menu Mobile Expandido */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t flex flex-col px-4 py-4 space-y-4 shadow-inner">
                    <a href="#sobre-mim" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600">Sobre</a>
                    <a href="#tecnologias" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600">Tecnologias</a>
                    <a href="#projetos" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600">Projetos</a>
                    <a href="#experiencias" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600">Experiências</a>
                    <a href="#rodape" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600">Contatos</a>
                </div>
            )}
        </header>
    );
}