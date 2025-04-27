import React, { createContext, useContext, useState } from 'react';

type Language = 'EN' | 'AR' | 'FR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  EN: {
    'post.task': 'Post a Task',
    'become.master': 'Become a Master',
    'how.works': 'How It Works',
    'services': 'Services',
    'testimonials': 'Testimonials',
    'contact': 'Contact',
    'tasks.simple': 'With L\'Maalem, tasks made simple.',
    'find.trusted': 'Find a trusted craftsman in minutes—cleaning, assembly, repairs & more.',
    'tasks.completed': 'Tasks Completed',
    'average.rating': 'Average Rating',
  },
  AR: {
    'post.task': 'أنشئ مهمتك',
    'become.master': 'كن المعلم',
    'how.works': 'كيف يعمل',
    'services': 'الخدمات',
    'testimonials': 'التوصيات',
    'contact': 'اتصل بنا',
    'tasks.simple': 'مع L\'Maalem، المهام بسيطة',
    'find.trusted': 'اعثر على حرفي موثوق به في دقائق - تنظيف، تجميع، إصلاحات وأكثر',
    'tasks.completed': 'المهام المنجزة',
    'average.rating': 'متوسط التقييم',
  },
  FR: {
    'post.task': 'Poster une Tâche',
    'become.master': 'Devenir un Maître',
    'how.works': 'Comment ça Marche',
    'services': 'Services',
    'testimonials': 'Témoignages',
    'contact': 'Contact',
    'tasks.simple': 'Avec L\'Maalem, les tâches sont simples.',
    'find.trusted': 'Trouvez un artisan de confiance en quelques minutes - ménage, montage, réparations et plus.',
    'tasks.completed': 'Tâches Complétées',
    'average.rating': 'Note Moyenne',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.EN] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
