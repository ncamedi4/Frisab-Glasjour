import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AlertBanner } from './components/AlertBanner';
import { ServicesSection } from './components/ServicesSection';
import { Partners } from './components/Partners';
import { ContactSection } from './components/ContactSection';
import { SafetySection } from './components/SafetySection';
import { AreaSection } from './components/AreaSection';
import { Footer } from './components/Footer';
import { ServiceDetail } from './components/ServiceDetail';

export type ViewState = 'home' | 'service-1' | 'service-2' | 'service-3' | 'service-4';

function App() {
  const [view, setView] = useState<ViewState>('home');

  const navigateTo = (newView: ViewState) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-frisab-blue selection:text-white overflow-x-hidden">
      <AlertBanner />
      <Header onHomeClick={() => navigateTo('home')} onNavigate={navigateTo} />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <ServicesSection onNavigate={navigateTo} />
            
            {/* Svedala Lås Teaser */}
            <section className="py-20 bg-zinc-900 text-white overflow-hidden relative">
              <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="max-w-xl">
                    <span className="text-frisab-yellow text-[10px] font-semibold uppercase tracking-[0.5em] mb-4 block">Svedala Lås</span>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase mb-6">BEHÖVER DU EN LÅSSMED?</h2>
                    <p className="text-zinc-400 font-normal mb-8 text-lg">Vi erbjuder kompletta låslösningar och säkerhetsbeslag som en del av vår verksamhet. Besök vår dedikerade låssida för mer information.</p>
                    <button 
                      onClick={() => navigateTo('service-4')}
                      className="bg-white text-black px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-frisab-yellow transition-all"
                    >
                      Läs om Svedala Lås
                    </button>
                  </div>
                  <div className="w-full md:w-1/3 opacity-20 md:opacity-100">
                    <img 
                      src="https://i.postimg.cc/855sFF5Q/La-s(Sa-kerhet.jpg" 
                      alt="Låssmed" 
                      className="w-full h-auto grayscale border-8 border-zinc-800 shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </section>

            <SafetySection />
            <AreaSection />
            <Partners />
            <ContactSection />
          </>
        ) : (
          <div className="pt-32 md:pt-48">
            <ServiceDetail serviceId={view} onBack={() => navigateTo('home')} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;