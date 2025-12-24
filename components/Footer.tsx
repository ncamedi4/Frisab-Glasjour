import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-white font-semibold text-2xl mb-2 tracking-tighter">SVEDALA LÅS</h3>
        <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto font-normal">
          Lås & säkerhetsbeslag | Smedgatan 1, Svedala<br />
          Drivs av Fönsterrenovering i Skåne AB (FRISAB).
        </p>
        <div className="w-12 h-1 bg-frisab-blue mx-auto mb-6"></div>
        <p className="text-zinc-600 text-xs uppercase tracking-widest font-semibold">
          © {new Date().getFullYear()} Alla rättigheter reserverade.
        </p>
      </div>
    </footer>
  );
};