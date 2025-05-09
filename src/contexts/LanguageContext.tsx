
import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface TranslationsType {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: TranslationsType = {
  en: {
    'app.name': 'L\'Maalem',
    'app.tagline': 'Find trusted professionals near you',
    'featured.taskers': 'Featured Taskers',
    'view.all.taskers': 'View All Taskers',
    'tasks': 'tasks',
    'years': 'years',
    'years.experience': 'years of experience',
    'loading': 'Loading...',
    'tasker.notFound': 'Tasker not found',
    'back.home': 'Back to Home',
    'back.services': 'Back to Services',
    'whatsapp.greeting': 'Hello',
    'whatsapp.inquiry': 'I\'m interested in your services.',
    'contact.whatsapp': 'Contact via WhatsApp',
    'about': 'About',
    'specialties': 'Specialties',
    'portfolio': 'Portfolio',
    'all.cities': 'All Cities',
    'services': 'Services',
    'taskers.available': 'taskers available',
    'no.taskers.found': 'No taskers found',
    'clear.filters': 'Clear Filters',
    'view.profile': 'View Profile',
    'category.assembly': 'Assembly',
    'category.mounting': 'Mounting',
    'category.moving': 'Moving',
    'category.cleaning': 'Cleaning',
    'category.outdoor': 'Outdoor Help',
    'category.repairs': 'Home Repairs',
    'category.painting': 'Painting',
    'category.trending': 'Trending',
    'how.it.works': 'How It Works',
    'step.one': 'Choose a Service',
    'step.two': 'Select a Professional',
    'step.three': 'Connect via WhatsApp',
    'search.placeholder': 'What do you need help with?',
    'search.button': 'Find Help',
    'trust.metrics.taskers': 'Skilled Professionals',
    'trust.metrics.cities': 'Cities',
    'trust.metrics.services': 'Services Offered',
    'trust.metrics.happy': 'Happy Clients',
    'coming.soon': 'Mobile App Coming Soon',
    'app.store': 'App Store',
    'play.store': 'Play Store'
  },
  fr: {
    'app.name': 'L\'Maalem',
    'app.tagline': 'Trouvez des professionnels de confiance près de chez vous',
    'featured.taskers': 'Artisans en Vedette',
    'view.all.taskers': 'Voir Tous les Artisans',
    'tasks': 'tâches',
    'years': 'ans',
    'years.experience': 'années d\'expérience',
    'loading': 'Chargement...',
    'tasker.notFound': 'Artisan non trouvé',
    'back.home': 'Retour à l\'accueil',
    'back.services': 'Retour aux services',
    'whatsapp.greeting': 'Bonjour',
    'whatsapp.inquiry': 'Je suis intéressé par vos services.',
    'contact.whatsapp': 'Contacter via WhatsApp',
    'about': 'À propos',
    'specialties': 'Spécialités',
    'portfolio': 'Portfolio',
    'all.cities': 'Toutes les villes',
    'services': 'Services',
    'taskers.available': 'artisans disponibles',
    'no.taskers.found': 'Aucun artisan trouvé',
    'clear.filters': 'Effacer les filtres',
    'view.profile': 'Voir le profil',
    'category.assembly': 'Assemblage',
    'category.mounting': 'Montage',
    'category.moving': 'Déménagement',
    'category.cleaning': 'Nettoyage',
    'category.outdoor': 'Aide extérieure',
    'category.repairs': 'Réparations',
    'category.painting': 'Peinture',
    'category.trending': 'Tendance',
    'how.it.works': 'Comment ça marche',
    'step.one': 'Choisissez un service',
    'step.two': 'Sélectionnez un professionnel',
    'step.three': 'Connectez-vous via WhatsApp',
    'search.placeholder': 'De quelle aide avez-vous besoin?',
    'search.button': 'Trouver de l\'aide',
    'trust.metrics.taskers': 'Professionnels qualifiés',
    'trust.metrics.cities': 'Villes',
    'trust.metrics.services': 'Services offerts',
    'trust.metrics.happy': 'Clients satisfaits',
    'coming.soon': 'Application mobile bientôt disponible',
    'app.store': 'App Store',
    'play.store': 'Play Store'
  },
  ar: {
    'app.name': 'المعلم',
    'app.tagline': 'ابحث عن محترفين موثوقين بالقرب منك',
    'featured.taskers': 'الحرفيين المميزين',
    'view.all.taskers': 'عرض جميع الحرفيين',
    'tasks': 'مهام',
    'years': 'سنوات',
    'years.experience': 'سنوات من الخبرة',
    'loading': 'جار التحميل...',
    'tasker.notFound': 'لم يتم العثور على الحرفي',
    'back.home': 'العودة إلى الصفحة الرئيسية',
    'back.services': 'العودة إلى الخدمات',
    'whatsapp.greeting': 'مرحباً',
    'whatsapp.inquiry': 'أنا مهتم بخدماتك.',
    'contact.whatsapp': 'التواصل عبر واتساب',
    'about': 'نبذة',
    'specialties': 'التخصصات',
    'portfolio': 'معرض الأعمال',
    'all.cities': 'جميع المدن',
    'services': 'الخدمات',
    'taskers.available': 'الحرفيين المتاحين',
    'no.taskers.found': 'لم يتم العثور على حرفيين',
    'clear.filters': 'مسح التصفية',
    'view.profile': 'عرض الملف الشخصي',
    'category.assembly': 'تجميع',
    'category.mounting': 'تثبيت',
    'category.moving': 'نقل',
    'category.cleaning': 'تنظيف',
    'category.outdoor': 'مساعدة خارجية',
    'category.repairs': 'إصلاحات منزلية',
    'category.painting': 'طلاء',
    'category.trending': 'رائج',
    'how.it.works': 'كيف يعمل',
    'step.one': 'اختر خدمة',
    'step.two': 'اختر محترف',
    'step.three': 'تواصل عبر واتساب',
    'search.placeholder': 'ما هي المساعدة التي تحتاجها؟',
    'search.button': 'ابحث عن مساعدة',
    'trust.metrics.taskers': 'محترفون مهرة',
    'trust.metrics.cities': 'مدن',
    'trust.metrics.services': 'الخدمات المقدمة',
    'trust.metrics.happy': 'العملاء السعداء',
    'coming.soon': 'تطبيق الجوال قريباً',
    'app.store': 'آب ستور',
    'play.store': 'بلاي ستور'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    // Try to get language from localStorage
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && ['en', 'fr', 'ar'].includes(storedLanguage)) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Set direction for RTL languages
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string) => {
    const currentTranslations = translations[language as keyof typeof translations];
    if (!currentTranslations) return key;
    
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
