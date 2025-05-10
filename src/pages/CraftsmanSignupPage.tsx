
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import CitySelect from '@/components/CitySelect';
import ServiceSelect from '@/components/ServiceSelect';

const CraftsmanSignupPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [service, setService] = useState('');
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone || !city || !service || !experience || !description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real application, you would upload the image and send the form data to a server
    // For now, we'll just navigate to the confirmation page
    setTimeout(() => {
      navigate('/signup-confirmation');
    }, 1000);
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{t('craftsman.signup.title')}</h1>
          <p className="text-gray-600 mb-8">{t('craftsman.signup.subtitle')}</p>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">{t('craftsman.name.label')}</Label>
                <Input 
                  id="name" 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">{t('craftsman.phone.label')}</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="city">{t('craftsman.city.label')}</Label>
                <CitySelect value={city} onChange={setCity} />
              </div>
              
              <div>
                <Label htmlFor="service">{t('craftsman.services.label')}</Label>
                <ServiceSelect 
                  value={service} 
                  onChange={setService}
                  placeholder={t('craftsman.services.placeholder')}
                />
              </div>
              
              <div>
                <Label htmlFor="experience">{t('craftsman.experience.label')}</Label>
                <Input 
                  id="experience" 
                  type="number" 
                  min="0" 
                  max="50" 
                  value={experience} 
                  onChange={(e) => setExperience(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="description">{t('craftsman.description.label')}</Label>
                <Textarea 
                  id="description" 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t('craftsman.description.placeholder')}
                  rows={4}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="image">{t('craftsman.image.label')}</Label>
                <Input 
                  id="image" 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange}
                  className="py-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  {t('craftsman.image.description')}
                </p>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700" 
              disabled={isSubmitting}
            >
              {t('craftsman.submit')}
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default CraftsmanSignupPage;
