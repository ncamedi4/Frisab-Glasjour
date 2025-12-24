import React from 'react';
import { Phone, Mail, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Bakgrundsbild med hög synlighet */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-7/12 z-0">
        <img 
          src="https://i.postimg.cc/rmmzddmy/Header-Image.png" 
          alt="Hantverkare i Svedala" 
          className="w-full h-full object-cover opacity-95 transition-opacity duration-1000"
        />
        {/* Toning: Mer täckande på mobil för läsbarhet */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/40 lg:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-40 pb-16 md:pt-48 md:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <span className="h-[2px] w-8 md:w-12 bg-frisab-blue"></span>
            <span className="text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.4em] md:tracking-[0.5em] text-frisab-blue">Sedan 1990</span>
          </div>

          <h1 className="text-3xl md:text-6xl font-semibold text-frisab-dark tracking-tighter leading-[1.1] md:leading-[1.05] uppercase mb-8 md:mb-12">
            FRISAB GLASJOUR<span className="text-frisab-blue">.</span><br />
            HANTVERK SOM <br/>HÅLLER<span className="text-zinc-200">.</span>
          </h1>

          {/* Clean Info-sektion */}
          <div className="relative mb-10 md:mb-16 max-w-xl group">
            <div className="border-l-[4px] md:border-l-[6px] border-frisab-blue pl-6 md:pl-10 py-1 md:py-2">
              <h2 className="text-frisab-blue text-xs md:text-base font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-5 italic">
                GLASMÄSTERI & FÖNSTERVÅRD
              </h2>
              <p className="text-zinc-500 font-normal text-base md:text-xl leading-relaxed tracking-tight">
                Specialister på reparationsglasningar, fönsterrenovering och inbrottsskador. Vi bevarar karaktären i dina fönster och säkrar ditt hem i hela Skåne.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <a 
              href="tel:0708955030" 
              className="group flex items-center justify-center gap-3 md:gap-4 bg-frisab-blue text-white px-8 md:px-10 py-5 md:py-6 font-semibold text-xs md:text-sm uppercase tracking-widest transition-all hover:bg-zinc-900 shadow-xl shadow-frisab-blue/20 hover:shadow-none sm:min-w-[260px] active:scale-[0.98]"
            >
              <span>RING TOMMY</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="mailto:frisab2@gmail.com" 
              className="group flex items-center justify-center gap-3 md:gap-4 bg-zinc-50 text-frisab-dark px-8 md:px-10 py-5 md:py-6 font-semibold text-xs md:text-sm uppercase tracking-widest transition-all hover:bg-zinc-200 border border-zinc-200 sm:min-w-[200px] active:scale-[0.98]"
            >
              <Mail size={18} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              <span>SKICKA E-POST</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};