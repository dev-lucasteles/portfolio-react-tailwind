import React from 'react';

export default function CardsExp({ cargo, empresa, tempo, descrição }) {
    return (
        <div className="
            flex flex-col justify-start
            bg-gray-800
            w-full max-w-[600px] 
            min-h-[250px] md:min-h-[300px]
            rounded-2xl md:rounded-[32px]
            p-5 md:p-6
            border-2 border-transparent hover:border-red-600
            brightness-90 hover:brightness-125
            transition-all duration-500 ease-in-out
            hover:translate-x-0 md:hover:-translate-x-1
            animate-fade-in-right animate-duration-1000 animate-fill-mode-both">
            
        <p className="font-sans text-left text-sm md:text-lg font-medium text-red-400 opacity-90 drop-shadow-md">
            {tempo}
        </p>
        
        <p className="font-sans text-left text-xl md:text-2xl font-bold text-white shadow-black drop-shadow-md">
            {cargo}
        </p>
        
        <p className="mt-1 font-sans text-left text-sm md:text-lg font-medium text-red-400 opacity-90 drop-shadow-md">
            {empresa}
        </p>
        
        <p className="mt-4 font-sans text-left text-base md:text-xl font-medium text-gray-300 opacity-90 drop-shadow-md whitespace-pre-line">
            {descrição}
        </p>
        </div>
    );
}