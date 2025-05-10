
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from "@/hooks/use-toast";
import CitySelect from '@/components/CitySelect';
import ServiceSelect from '@/components/ServiceSelect';
import DatePicker from '@/components/DatePicker';

const JobRequestPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [service, setService] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [useWhatsApp, setUseWhatsApp] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!service || !city || !date || !description || !name || !phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    if (useWhatsApp) {
      // Prepare WhatsApp message
      const message = `${t('whatsapp.greeting')}, ${t('whatsapp.inquiry')}
Service: ${service}
City: ${city}
Date: ${date ? date.toLocaleDateString() : ''}
Description: ${description}
Name: ${name}`;

      const whatsappLink = `https://wa.me/212XXXXXXXXX?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank');
    }
    
    // Navigate to confirmation page
    navigate('/request-confirmation');
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{t('job.request.title')}</h1>
          <p className="text-gray-600 mb-8">{t('job.request.subtitle')}</p>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-4">
              <div>
                <Label htmlFor="service">{t('job.service.label')}</Label>
                <ServiceSelect value={service} onChange={setService} />
              </div>
              
              <div>
                <Label htmlFor="city">{t('job.city.label')}</Label>
                <CitySelect value={city} onChange={setCity} />
              </div>
              
              <div>
                <Label htmlFor="date">{t('job.date.label')}</Label>
                <DatePicker date={date} setDate={setDate} />
              </div>
              
              <div>
                <Label htmlFor="description">{t('job.description.label')}</Label>
                <Textarea 
                  id="description" 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t('job.description.placeholder')}
                  rows={4}
                  className="w-full"
                  required
                />
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <h3 className="font-bold mb-4">{t('job.contact.label')}</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">{t('job.name.label')}</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">{t('job.phone.label')}</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="whatsapp" 
                    checked={useWhatsApp}
                    onCheckedChange={(checked) => setUseWhatsApp(checked as boolean)}
                  />
                  <label
                    htmlFor="whatsapp"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t('job.whatsapp.option')}
                  </label>
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {t('job.submit')}
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default JobRequestPage;
