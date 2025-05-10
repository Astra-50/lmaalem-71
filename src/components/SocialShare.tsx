
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const SocialShare = () => {
  const { t } = useLanguage();

  const shareUrl = window.location.href;
  const shareText = "Check out L'Maalem - Find trusted professionals in Morocco!";
  
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');
  };
  
  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
  };

  return (
    <div className="mt-6">
      <p className="text-sm text-gray-500 mb-2">{t('share.text')}</p>
      <div className="flex space-x-2">
        <Button variant="outline" size="sm" onClick={shareOnFacebook}>
          {t('share.facebook')}
        </Button>
        <Button variant="outline" size="sm" onClick={shareOnTwitter}>
          {t('share.twitter')}
        </Button>
        <Button variant="outline" size="sm" onClick={shareOnWhatsApp} className="flex items-center">
          <MessageCircle className="h-4 w-4 mr-1" />
          {t('share.whatsapp')}
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;
