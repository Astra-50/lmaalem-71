
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex space-x-4 text-gray-400">
      <button 
        className={`hover:text-white ${language === 'AR' ? 'text-white' : ''}`}
        onClick={() => setLanguage('AR')}
      >
        AR
      </button>
      <span>|</span>
      <button 
        className={`hover:text-white ${language === 'FR' ? 'text-white' : ''}`}
        onClick={() => setLanguage('FR')}
      >
        FR
      </button>
      <span>|</span>
      <button 
        className={`hover:text-white ${language === 'EN' ? 'text-white' : ''}`}
        onClick={() => setLanguage('EN')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
