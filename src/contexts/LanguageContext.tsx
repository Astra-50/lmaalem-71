
import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextProps {
  language: string;
  t: (key: string) => string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  t: (key: string) => key,
  setLanguage: () => {},
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

const translations = {
  en: {
    "services": "Services",
    "back.home": "Back to Home",
    "category.assembly": "Assembly",
    "category.mounting": "Mounting",
    "category.moving": "Moving",
    "category.cleaning": "Cleaning",
    "category.outdoor": "Outdoor",
    "category.repairs": "Repairs",
    "category.painting": "Painting",
    "category.trending": "Trending",
    "taskers.available": "Taskers available",
    "tasks": "tasks",
    "view.profile": "View Profile",
    "loading": "Loading...",
    "tasker.notFound": "Tasker not found",
    "back.services": "Back to Services",
    "about": "About",
    "specialties": "Specialties",
    "portfolio": "Portfolio",
    "contact.whatsapp": "Contact via WhatsApp",
    "years.experience": "years of experience",
    "years": "years",
    "all.cities": "All Cities",
    "no.taskers.found": "No taskers found matching your criteria",
    "clear.filters": "Clear Filters",
    "whatsapp.greeting": "Hello",
    "whatsapp.inquiry": "I saw your profile on L'Maalem and I'm interested in your services.",
    "featured.taskers": "Featured Taskers",
    "view.all.taskers": "View All Taskers"
  },
  ar: {
    "services": "الخدمات",
    "back.home": "العودة إلى الرئيسية",
    "category.assembly": "تركيب",
    "category.mounting": "تثبيت",
    "category.moving": "نقل",
    "category.cleaning": "تنظيف",
    "category.outdoor": "خدمات خارجية",
    "category.repairs": "إصلاحات",
    "category.painting": "دهان",
    "category.trending": "الأكثر شيوعا",
    "taskers.available": "معلمين متاحين",
    "tasks": "مهمة",
    "view.profile": "عرض الملف الشخصي",
    "loading": "جاري التحميل...",
    "tasker.notFound": "لم يتم العثور على المعلم",
    "back.services": "العودة إلى الخدمات",
    "about": "عن المعلم",
    "specialties": "التخصصات",
    "portfolio": "معرض الأعمال",
    "contact.whatsapp": "تواصل عبر واتساب",
    "years.experience": "سنوات الخبرة",
    "years": "سنوات",
    "all.cities": "كل المدن",
    "no.taskers.found": "لم يتم العثور على معلمين مطابقين لمعاييرك",
    "clear.filters": "مسح المرشحات",
    "whatsapp.greeting": "مرحبا",
    "whatsapp.inquiry": "لقد رأيت ملفك الشخصي على المعلم وأنا مهتم بخدماتك.",
    "featured.taskers": "معلمين مميزين",
    "view.all.taskers": "عرض جميع المعلمين"
  },
  fr: {
    "services": "Services",
    "back.home": "Retour à l'accueil",
    "category.assembly": "Assemblage",
    "category.mounting": "Montage",
    "category.moving": "Déménagement",
    "category.cleaning": "Nettoyage",
    "category.outdoor": "Extérieur",
    "category.repairs": "Réparations",
    "category.painting": "Peinture",
    "category.trending": "Tendances",
    "taskers.available": "Artisans disponibles",
    "tasks": "tâches",
    "view.profile": "Voir le profil",
    "loading": "Chargement...",
    "tasker.notFound": "Artisan non trouvé",
    "back.services": "Retour aux services",
    "about": "À propos",
    "specialties": "Spécialités",
    "portfolio": "Portfolio",
    "contact.whatsapp": "Contact via WhatsApp",
    "years.experience": "années d'expérience",
    "years": "ans",
    "all.cities": "Toutes les villes",
    "no.taskers.found": "Aucun artisan trouvé correspondant à vos critères",
    "clear.filters": "Effacer les filtres",
    "whatsapp.greeting": "Bonjour",
    "whatsapp.inquiry": "J'ai vu votre profil sur L'Maalem et je suis intéressé par vos services.",
    "featured.taskers": "Artisans en Vedette",
    "view.all.taskers": "Voir tous les artisans"
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string) => {
    const currentTranslations = translations[language as keyof typeof translations];
    if (!currentTranslations) return key;
    
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
