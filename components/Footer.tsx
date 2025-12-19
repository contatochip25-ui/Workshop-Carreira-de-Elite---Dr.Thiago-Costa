
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-zinc-900 bg-black px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <p className="font-serif text-2xl gold-text mb-2 tracking-tight">Dr. Thiago Costa</p>
          <p className="text-zinc-600 text-sm font-light italic">A Maestria do Sucesso na Medicina</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-6">
          <a 
            href="https://instagram.com/dr.thiago.costa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-zinc-950 border border-zinc-800 px-5 py-2.5 rounded-full hover:border-[#d4af37]/50 transition-all duration-500"
          >
            <Instagram className="w-5 h-5 text-zinc-500 group-hover:text-[#d4af37] transition-colors" />
            <span className="text-sm text-zinc-400 group-hover:text-white transition-colors tracking-tight">@dr.thiago.costa</span>
          </a>

          <div className="text-center md:text-right space-y-4">
            <p className="text-zinc-700 text-[10px] uppercase tracking-[0.25em] font-medium">
              © 2024 - Workshop de Carreira Médica. Todos os direitos reservados.
            </p>
            <div className="flex justify-center md:justify-end space-x-8 text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-semibold">
              <a href="#" className="hover:text-[#d4af37] transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-[#d4af37] transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
