
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-zinc-900 bg-black px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <p className="font-serif text-2xl gold-text mb-2 tracking-tight font-bold">Dr. Thiago Costa</p>
          <p className="text-zinc-200 text-sm font-medium italic">A Maestria do Sucesso na Medicina</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-6">
          <a 
            href="https://instagram.com/dr.thiago.costa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-zinc-900 border border-zinc-700 px-5 py-2.5 rounded-full hover:border-[#F4C542]/50 transition-all duration-500"
          >
            <Instagram className="w-5 h-5 text-[#F4C542] group-hover:scale-110 transition-transform" />
            <span className="text-sm text-white group-hover:text-[#F4C542] transition-colors tracking-tight font-bold">@dr.thiago.costa</span>
          </a>

          <div className="text-center md:text-right space-y-4">
            <p className="text-zinc-400 text-[10px] uppercase tracking-[0.25em] font-bold">
              © 2025 - Workshop de Carreira Médica. Todos os direitos reservados.
            </p>
            <div className="flex justify-center md:justify-end space-x-8 text-zinc-300 text-[10px] uppercase tracking-[0.2em] font-black">
              <a href="#" className="hover:text-[#F4C542] transition-colors underline-offset-4 hover:underline">Termos de Uso</a>
              <a href="#" className="hover:text-[#F4C542] transition-colors underline-offset-4 hover:underline">Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
