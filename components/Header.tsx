import React from 'react';
import { Phone, ShieldCheck } from 'lucide-react';
import { ContactPerson } from '../types';

const contacts: ContactPerson[] = [
  { name: 'Tommy', phone: '0708955030', displayPhone: '0708-95 50 30' },
  { name: 'Jonny', phone: '0708955025', displayPhone: '0708-95 50 25' },
];

interface HeaderProps {
  onHomeClick: () => void;
  onNavigate: (view: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ onHomeClick, onNavigate }) => {
  return (
    <header 
      className="fixed left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b top-[50px] md:top-[54px] py-3 md:py-4 border-zinc-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={onHomeClick}
            className="flex flex-col items-start group max-w-[60%] sm:max-w-none"
          >
            <span className="text-lg md:text-3xl font-semibold text-frisab-dark tracking-tighter leading-none group-hover:text-frisab-blue transition-colors">
              FRISAB<span className="text-frisab-blue">.</span> <span className="text-zinc-300 font-light uppercase text-[0.6em] tracking-widest">GLASJOUR</span>
            </span>
            <span className="text-[7px] md:text-[8px] font-medium text-zinc-400 tracking-[0.3em] md:tracking-[0.4em] uppercase mt-1 truncate w-full">
              Glasmästeri & Fönsterhantverk
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-10">
            <button 
              onClick={() => onNavigate('service-4')}
              className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 hover:text-frisab-blue transition-colors border-r border-zinc-200 pr-8"
            >
              <ShieldCheck size={16} />
              Svedala Lås
            </button>
            
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={`tel:${contact.phone}`}
                className="group flex flex-col items-end"
              >
                <span className="text-[9px] font-semibold text-zinc-400 uppercase tracking-widest mb-0.5 group-hover:text-frisab-blue transition-colors">
                  {contact.name}
                </span>
                <span className="text-frisab-dark font-medium text-[14px] tracking-tight border-b border-transparent group-hover:border-frisab-blue transition-all">
                  {contact.displayPhone}
                </span>
              </a>
            ))}
          </div>

          <div className="lg:hidden flex gap-2 md:gap-3">
             {contacts.map((c) => (
               <a 
                 key={c.name}
                 href={`tel:${c.phone}`}
                 className="flex flex-col items-center justify-center"
                 aria-label={`Ring ${c.name}`}
               >
                 <div className="bg-zinc-50 text-frisab-blue w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-zinc-200 shadow-sm active:scale-95 transition-transform">
                   <Phone size={14} fill="currentColor"/>
                 </div>
               </a>
             ))}
          </div>
        </div>
      </div>
    </header>
  );
};