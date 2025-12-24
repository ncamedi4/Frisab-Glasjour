import React, { useState } from 'react';
import { Mail, Phone, ChevronRight, Send, User, MessageSquare, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'glasmasteri',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tack ${formData.name}! Vi återkommer till dig gällande ${formData.service}.`);
  };

  return (
    <section className="py-20 md:py-28 bg-white text-zinc-900" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* Vänster sida - Kontaktinformation */}
          <div className="lg:sticky lg:top-48">
            <span className="text-[10px] md:text-[11px] font-semibold text-frisab-blue uppercase tracking-[0.4em] md:tracking-[0.5em] block mb-3 md:mb-4">Snabb kontakt</span>
            <h2 className="text-3xl md:text-6xl font-semibold text-frisab-dark mb-8 md:mb-12 uppercase tracking-tighter leading-none">KONTAKTA OSS<span className="text-frisab-blue">.</span></h2>
            
            <div className="space-y-8 md:space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                <div className="bg-zinc-50 p-6 md:p-8 border border-zinc-100 group transition-all hover:bg-white hover:shadow-lg">
                  <h3 className="font-semibold uppercase tracking-widest text-[9px] md:text-[10px] text-zinc-400 mb-2 md:mb-3 flex items-center gap-2">
                    <MapPin size={12} className="text-frisab-blue" /> Verkstad
                  </h3>
                  <p className="text-base md:text-lg font-medium leading-tight text-zinc-800">
                    Smedgatan 1<br />
                    233 51 Svedala
                  </p>
                </div>

                <div className="bg-zinc-50 p-6 md:p-8 border border-zinc-100 group transition-all hover:bg-white hover:shadow-lg">
                  <h3 className="font-semibold uppercase tracking-widest text-[9px] md:text-[10px] text-zinc-400 mb-2 md:mb-3 flex items-center gap-2">
                    <Mail size={12} className="text-frisab-blue" /> E-post
                  </h3>
                  <a href="mailto:frisab2@gmail.com" className="text-base md:text-lg font-semibold text-zinc-800 hover:text-frisab-blue transition-colors break-all">
                    frisab2@gmail.com
                  </a>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <a href="tel:0708955030" className="group flex items-center justify-between border-b border-zinc-100 py-4 md:py-6 transition-all hover:pl-2 active:bg-zinc-50">
                   <div>
                     <p className="text-zinc-400 font-semibold uppercase text-[9px] md:text-[10px] mb-1 tracking-widest">Tommy (Direkt)</p>
                     <p className="text-xl md:text-2xl font-semibold tracking-tighter">0708-95 50 30</p>
                   </div>
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-frisab-blue group-hover:text-white group-hover:border-frisab-blue transition-all">
                     <ChevronRight size={20} className="md:w-6 md:h-6" />
                   </div>
                </a>
                
                <a href="tel:0708955025" className="group flex items-center justify-between bg-frisab-yellow/5 p-6 md:p-8 border-l-[4px] md:border-l-[6px] border-frisab-yellow transition-all hover:bg-frisab-yellow/10 active:scale-[0.99]">
                   <div>
                     <p className="text-frisab-dark font-semibold uppercase text-[9px] md:text-[10px] mb-1 tracking-widest">Glasjour & Akut Lås</p>
                     <p className="text-xl md:text-2xl font-semibold tracking-tighter">0708-95 50 25</p>
                   </div>
                   <div className="bg-white p-2 md:p-3 rounded-full shadow-sm">
                     <Phone size={20} className="text-frisab-dark md:w-6 md:h-6" />
                   </div>
                </a>
              </div>
            </div>
          </div>

          {/* Höger sida - Kontaktformulär */}
          <div className="bg-white border border-zinc-100 p-6 md:p-12 shadow-xl md:shadow-2xl relative lg:mt-6">
            <div className="absolute top-0 right-8 md:right-14 w-12 md:w-20 h-1 md:h-1.5 bg-frisab-blue"></div>
            <div className="mb-8 md:mb-10">
              <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-tighter text-frisab-dark leading-none">OFFERTFÖRFRÅGAN</h3>
              <p className="text-zinc-400 text-[11px] md:text-sm mt-2 md:mt-3 font-medium uppercase tracking-[0.2em]">Svar normalt inom 24 timmar</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] font-bold uppercase text-zinc-400 tracking-widest flex items-center gap-2">
                    <User size={12} /> Namn / Företag
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ditt namn..."
                    className="w-full bg-zinc-50 border border-zinc-100 p-4 text-base text-frisab-dark focus:bg-white focus:border-frisab-blue focus:ring-4 focus:ring-frisab-blue/5 outline-none transition-all placeholder:text-zinc-300 rounded-none"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] font-bold uppercase text-zinc-400 tracking-widest flex items-center gap-2">
                    <Phone size={12} /> Telefonnummer
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="07X-XXX XX XX"
                    className="w-full bg-zinc-50 border border-zinc-100 p-4 text-base text-frisab-dark focus:bg-white focus:border-frisab-blue focus:ring-4 focus:ring-frisab-blue/5 outline-none transition-all placeholder:text-zinc-300 rounded-none"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Vad behöver du hjälp med?</label>
                <div className="relative">
                  <select 
                    className="w-full bg-zinc-50 border border-zinc-100 p-4 text-base text-frisab-dark focus:bg-white focus:border-frisab-blue focus:ring-4 focus:ring-frisab-blue/5 outline-none appearance-none cursor-pointer transition-all rounded-none"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="glasmasteri">Glasmästeri / Isolerglas</option>
                    <option value="fönsterrenovering">Fönsterrenovering</option>
                    <option value="beslag">Fönsterbeslag / Reservdelar</option>
                    <option value="lås">Lås & Säkerhet (Svedala Lås)</option>
                    <option value="jour">AKUT: Glasjour / Inbrott</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                    <ChevronRight size={16} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] font-bold uppercase text-zinc-400 tracking-widest flex items-center gap-2">
                  <MessageSquare size={12} /> Ditt meddelande
                </label>
                <textarea 
                  rows={4}
                  placeholder="Beskriv ditt ärende..."
                  className="w-full bg-zinc-50 border border-zinc-100 p-4 text-base text-frisab-dark focus:bg-white focus:border-frisab-blue focus:ring-4 focus:ring-frisab-blue/5 outline-none transition-all resize-none placeholder:text-zinc-300 rounded-none"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-frisab-blue hover:bg-zinc-900 text-white py-4 md:py-5 font-bold uppercase text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-lg shadow-frisab-blue/20 hover:shadow-none active:scale-[0.98]"
              >
                SKICKA MEDDELANDE <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};