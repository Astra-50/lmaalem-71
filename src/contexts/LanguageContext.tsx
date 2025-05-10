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
    'play.store': 'Play Store',
    
    // Job Request Form
    'job.request.title': 'Request a Service',
    'job.request.subtitle': 'Tell us what you need help with and we\'ll connect you with the right professional',
    'job.service.label': 'Type of Service',
    'job.service.placeholder': 'Select a service',
    'job.city.label': 'City',
    'job.city.placeholder': 'Select your city',
    'job.date.label': 'Preferred Date',
    'job.date.placeholder': 'When do you need this service?',
    'job.description.label': 'Describe Your Project',
    'job.description.placeholder': 'Provide details about what you need help with...',
    'job.contact.label': 'Contact Information',
    'job.name.label': 'Full Name',
    'job.phone.label': 'Phone Number',
    'job.submit': 'Submit Request',
    'job.whatsapp.option': 'Connect me via WhatsApp',

    // Craftsman Signup Form
    'craftsman.signup.title': 'Join as a Craftsman',
    'craftsman.signup.subtitle': 'Register your services and start getting clients through L\'Maalem',
    'craftsman.name.label': 'Full Name',
    'craftsman.phone.label': 'Phone Number (WhatsApp)',
    'craftsman.city.label': 'City',
    'craftsman.services.label': 'Services Offered',
    'craftsman.services.placeholder': 'Select the services you provide',
    'craftsman.experience.label': 'Years of Experience',
    'craftsman.description.label': 'About Your Services',
    'craftsman.description.placeholder': 'Describe your expertise, skills, and the services you offer...',
    'craftsman.image.label': 'Profile Photo (Optional)',
    'craftsman.image.description': 'Upload a professional photo of yourself or your work',
    'craftsman.submit': 'Submit Application',
    
    // Confirmation Pages
    'job.confirmation.title': 'Request Submitted!',
    'job.confirmation.message': 'Thank you for your service request. We\'ll connect you with a qualified professional soon.',
    'job.confirmation.next': 'What happens next?',
    'job.confirmation.step1': 'Your request is being reviewed',
    'job.confirmation.step2': 'We\'ll match you with available professionals',
    'job.confirmation.step3': 'You\'ll be contacted via WhatsApp to finalize details',
    
    'craftsman.confirmation.title': 'Application Received!',
    'craftsman.confirmation.message': 'Thank you for applying to join L\'Maalem network.',
    'craftsman.confirmation.next': 'What happens next?',
    'craftsman.confirmation.step1': 'We\'ll review your application',
    'craftsman.confirmation.step2': 'Once approved, your profile will be visible to clients',
    'craftsman.confirmation.step3': 'You\'ll start receiving job requests via WhatsApp',
    'craftsman.confirmation.whatsapp': 'Join our WhatsApp community',
    'craftsman.confirmation.whatsapp.description': 'Connect with other craftsmen, get tips and receive updates',
    
    // Social Sharing
    'share.text': 'Share with others:',
    'share.facebook': 'Share on Facebook',
    'share.twitter': 'Share on Twitter',
    'share.whatsapp': 'Share via WhatsApp',
    
    // Static Pages
    'terms.title': 'Terms of Service',
    'privacy.title': 'Privacy Policy',
    'about.title': 'About L\'Maalem',
    'contact.title': 'Contact Us',
    'back.button': 'Back',
    'submit.button': 'Submit'
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
    'play.store': 'Play Store',
    
    // Job Request Form
    'job.request.title': 'Demander un Service',
    'job.request.subtitle': 'Dites-nous ce dont vous avez besoin et nous vous mettrons en contact avec le bon professionnel',
    'job.service.label': 'Type de service',
    'job.service.placeholder': 'Sélectionnez un service',
    'job.city.label': 'Ville',
    'job.city.placeholder': 'Sélectionnez votre ville',
    'job.date.label': 'Date Préférée',
    'job.date.placeholder': 'Quand avez-vous besoin de ce service?',
    'job.description.label': 'Décrivez Votre Projet',
    'job.description.placeholder': 'Fournissez des détails sur ce dont vous avez besoin...',
    'job.contact.label': 'Informations de Contact',
    'job.name.label': 'Nom Complet',
    'job.phone.label': 'Numéro de Téléphone',
    'job.submit': 'Soumettre la Demande',
    'job.whatsapp.option': 'Contactez-moi via WhatsApp',

    // Craftsman Signup Form
    'craftsman.signup.title': 'Rejoindre en tant qu\'Artisan',
    'craftsman.signup.subtitle': 'Enregistrez vos services et commencez à obtenir des clients via L\'Maalem',
    'craftsman.name.label': 'Nom Complet',
    'craftsman.phone.label': 'Numéro de Téléphone (WhatsApp)',
    'craftsman.city.label': 'Ville',
    'craftsman.services.label': 'Services Offerts',
    'craftsman.services.placeholder': 'Sélectionnez les services que vous fournissez',
    'craftsman.experience.label': 'Années d\'Expérience',
    'craftsman.description.label': 'À Propos de Vos Services',
    'craftsman.description.placeholder': 'Décrivez votre expertise, compétences et les services que vous proposez...',
    'craftsman.image.label': 'Photo de Profil (Facultatif)',
    'craftsman.image.description': 'Téléchargez une photo professionnelle de vous ou de votre travail',
    'craftsman.submit': 'Soumettre la Candidature',
    
    // Confirmation Pages
    'job.confirmation.title': 'Demande Soumise!',
    'job.confirmation.message': 'Merci pour votre demande de service. Nous vous mettrons en relation avec un professionnel qualifié bientôt.',
    'job.confirmation.next': 'Que se passe-t-il ensuite?',
    'job.confirmation.step1': 'Votre demande est en cours d\'examen',
    'job.confirmation.step2': 'Nous vous mettrons en relation avec des professionnels disponibles',
    'job.confirmation.step3': 'Vous serez contacté via WhatsApp pour finaliser les détails',
    
    'craftsman.confirmation.title': 'Candidature Reçue!',
    'craftsman.confirmation.message': 'Merci d\'avoir postulé pour rejoindre le réseau L\'Maalem.',
    'craftsman.confirmation.next': 'Que se passe-t-il ensuite?',
    'craftsman.confirmation.step1': 'Nous examinerons votre candidature',
    'craftsman.confirmation.step2': 'Une fois approuvé, votre profil sera visible par les clients',
    'craftsman.confirmation.step3': 'Vous commencerez à recevoir des demandes de travail via WhatsApp',
    'craftsman.confirmation.whatsapp': 'Rejoignez notre communauté WhatsApp',
    'craftsman.confirmation.whatsapp.description': 'Connectez-vous avec d\'autres artisans, obtenez des conseils et recevez des mises à jour',
    
    // Social Sharing
    'share.text': 'Partager avec d\'autres:',
    'share.facebook': 'Partager sur Facebook',
    'share.twitter': 'Partager sur Twitter',
    'share.whatsapp': 'Partager via WhatsApp',
    
    // Static Pages
    'terms.title': 'Conditions d\'Utilisation',
    'privacy.title': 'Politique de Confidentialité',
    'about.title': 'À Propos de L\'Maalem',
    'contact.title': 'Contactez-Nous',
    'back.button': 'Retour',
    'submit.button': 'Soumettre'
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
    'play.store': 'بلاي ستور',
    
    // Job Request Form
    'job.request.title': 'طلب خدمة',
    'job.request.subtitle': 'أخبرنا بما تحتاج إليه وسنوصلك بالمحترف المناسب',
    'job.service.label': 'نوع الخدمة',
    'job.service.placeholder': 'اختر خدمة',
    'job.city.label': 'المدينة',
    'job.city.placeholder': 'اختر مدينتك',
    'job.date.label': 'التاريخ المفضل',
    'job.date.placeholder': 'متى تحتاج هذه الخدمة؟',
    'job.description.label': 'وصف مشروعك',
    'job.description.placeholder': 'قم بتوفير تفاصيل حول ما تحتاج المساعدة به...',
    'job.contact.label': 'معلومات الاتصال',
    'job.name.label': 'الاسم الكامل',
    'job.phone.label': 'رقم الهاتف',
    'job.submit': 'إرسال الطلب',
    'job.whatsapp.option': 'تواصل معي عبر واتساب',

    // Craftsman Signup Form
    'craftsman.signup.title': 'انضم كحرفي',
    'craftsman.signup.subtitle': 'سجل خدماتك وابدأ في الحصول على عملاء من خلال المعلم',
    'craftsman.name.label': 'الاسم الكامل',
    'craftsman.phone.label': 'رقم الهاتف (واتساب)',
    'craftsman.city.label': 'المدينة',
    'craftsman.services.label': 'الخدمات المقدمة',
    'craftsman.services.placeholder': 'اختر الخدمات التي تقدمها',
    'craftsman.experience.label': 'سنوات الخبرة',
    'craftsman.description.label': 'حول خدماتك',
    'craftsman.description.placeholder': 'صف خبرتك ومهاراتك والخدمات التي تقدمها...',
    'craftsman.image.label': 'صورة الملف الشخصي (اختياري)',
    'craftsman.image.description': 'قم بتحميل صورة احترافية لنفسك أو لعملك',
    'craftsman.submit': 'تقديم الطلب',
    
    // Confirmation Pages
    'job.confirmation.title': 'تم إرسال الطلب!',
    'job.confirmation.message': 'شكراً لطلب الخدمة. سنقوم بتوصيلك مع محترف مؤهل قريباً.',
    'job.confirmation.next': 'ماذا يحدث بعد ذلك؟',
    'job.confirmation.step1': 'يتم مراجعة طلبك',
    'job.confirmation.step2': 'سنقوم بتوصيلك بالمحترفين المتاحين',
    'job.confirmation.step3': 'سيتم الاتصال بك عبر واتساب لإنهاء التفاصيل',
    
    'craftsman.confirmation.title': 'تم استلام الطلب!',
    'craftsman.confirmation.message': 'شكراً للتقديم للانضمام إلى شبكة المعلم.',
    'craftsman.confirmation.next': 'ماذا يحدث بعد ذلك؟',
    'craftsman.confirmation.step1': 'سنقوم بمراجعة طلبك',
    'craftsman.confirmation.step2': 'بمجرد الموافقة، سيكون ملفك الشخصي مرئياً للعملاء',
    'craftsman.confirmation.step3': 'ستبدأ في تلقي طلبات العمل عبر واتساب',
    'craftsman.confirmation.whatsapp': 'انضم إلى مجتمع واتساب لدينا',
    'craftsman.confirmation.whatsapp.description': 'تواصل مع الحرفيين الآخ��ين، واحصل على نصائح واستلم التحديثات',
    
    // Social Sharing
    'share.text': 'شارك مع الآخرين:',
    'share.facebook': 'مشاركة على فيسبوك',
    'share.twitter': 'مشاركة على تويتر',
    'share.whatsapp': 'مشاركة عبر واتساب',
    
    // Static Pages
    'terms.title': 'شروط الخدمة',
    'privacy.title': 'سياسة الخصوصية',
    'about.title': 'حول المعلم',
    'contact.title': 'اتصل بنا',
    'back.button': 'رجوع',
    'submit.button': 'إرسال'
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
