
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-black px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-serif text-2xl gold-text mb-2">Dr. Thiago Costa</p>
          <p className="text-zinc-600 text-sm italic">A Maestria do Sucesso na Medicina</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center space-x-6 text-zinc-500">
            <a 
              href="https://instagram.com/dr.thiago.costa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-white transition-colors group"
            >
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs uppercase tracking-widest">@dr.thiago.costa</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-zinc-700 text-[10px] uppercase tracking-[0.2em] mb-2">
              © 2024 - Workshop de Carreira Médica. Todos os direitos reservados.
            </p>
            <div className="flex justify-center md:justify-end space-x-6 text-zinc-600 text-[10px] uppercase tracking-widest font-medium">
              <a href="#" className="hover:text-gold-text transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-gold-text transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
