
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex space-x-4 text-gray-400">
      <button 
        className={`hover:text-white ${language === 'ar' ? 'text-white' : ''}`}
        onClick={() => setLanguage('ar')}
      >
        AR
      </button>
      <span>|</span>
      <button 
        className={`hover:text-white ${language === 'fr' ? 'text-white' : ''}`}
        onClick={() => setLanguage('fr')}
      >
        FR
      </button>
      <span>|</span>
      <button 
        className={`hover:text-white ${language === 'en' ? 'text-white' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
