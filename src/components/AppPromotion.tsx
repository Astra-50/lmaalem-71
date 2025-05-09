
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const AppPromotion = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{t('coming.soon') || 'Mobile App Coming Soon'}</h2>
            <p className="text-gray-600 mb-6">
              Experience L'Maalem on the go! Our mobile app will make it even easier to find and connect with trusted professionals wherever you are.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="opacity-60 cursor-not-allowed">
                {t('app.store') || 'App Store'} (Coming Soon)
              </Button>
              <Button variant="outline" className="opacity-60 cursor-not-allowed">
                {t('play.store') || 'Play Store'} (Coming Soon)
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-96">
              {/* Placeholder for app screenshot/mockup */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/10 rounded-3xl border-4 border-white shadow-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">L'M</span>
                  </div>
                  <h3 className="text-xl font-bold">L'Maalem</h3>
                  <p className="text-sm text-gray-600 mt-2">Find trusted professionals near you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;
