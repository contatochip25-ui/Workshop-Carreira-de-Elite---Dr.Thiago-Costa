
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-black px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-serif text-2xl gold-text mb-2">Dr. Thiago</p>
          <p className="text-zinc-600 text-sm">A Maestria do Sucesso na Medicina</p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-zinc-500 text-xs mb-4">
            © 2024 - Workshop de Carreira Médica. Todos os direitos reservados.
          </p>
          <div className="flex justify-center md:justify-end space-x-6 text-zinc-600 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
