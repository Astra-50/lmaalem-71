
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle } from 'lucide-react';
import SocialShare from '@/components/SocialShare';

const CraftsmanSignupConfirmation = () => {
  const { t } = useLanguage();
  
  // WhatsApp community link
  const whatsappCommunityLink = "https://chat.whatsapp.com/XXXXXXXXXXX";

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-12 w-12 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">{t('craftsman.confirmation.title')}</h1>
          <p className="text-xl mb-8">{t('craftsman.confirmation.message')}</p>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-left mb-8">
            <h3 className="font-bold text-xl mb-4">{t('craftsman.confirmation.next')}</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                <span>{t('craftsman.confirmation.step1')}</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                <span>{t('craftsman.confirmation.step2')}</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                <span>{t('craftsman.confirmation.step3')}</span>
              </li>
            </ul>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">{t('craftsman.confirmation.whatsapp')}</h4>
              <p className="text-sm text-gray-600 mb-4">{t('craftsman.confirmation.whatsapp.description')}</p>
              <a href={whatsappCommunityLink} target="_blank" rel="noreferrer">
                <Button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700">
                  <MessageCircle className="h-4 w-4" />
                  Join WhatsApp Group
                </Button>
              </a>
            </div>
          </div>
          
          <SocialShare />
          
          <div className="mt-8">
            <Link to="/">
              <Button>{t('back.home')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CraftsmanSignupConfirmation;
