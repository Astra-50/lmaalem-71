
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, WhatsApp, Clock, Check, User } from 'lucide-react';
import { useTasker, useTaskerSpecialties, useTaskerPortfolio } from '@/hooks/use-tasker-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';

const TaskerProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { data: tasker, isLoading: isLoadingTasker } = useTasker(id);
  const { data: specialties = [], isLoading: isLoadingSpecialties } = useTaskerSpecialties(id);
  const { data: portfolio = [], isLoading: isLoadingPortfolio } = useTaskerPortfolio(id);
  
  const isLoading = isLoadingTasker || isLoadingSpecialties || isLoadingPortfolio;
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl">{t('loading')}</div>
      </div>
    );
  }
  
  if (!tasker) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-xl mb-4">{t('tasker.notFound')}</div>
        <Link to="/">
          <Button>{t('back.home')}</Button>
        </Link>
      </div>
    );
  }
  
  // WhatsApp deep link with pre-filled message
  const whatsappMessage = encodeURIComponent(`${t('whatsapp.greeting')} ${tasker.name}, ${t('whatsapp.inquiry')}`);
  const whatsappLink = `https://wa.me/${tasker.whatsapp?.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <header className="bg-white border-b sticky top-0 z-10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/services/trending">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('back.services')}
              </Button>
            </Link>
            
            <div className="w-24"></div> {/* Spacer for balanced layout */}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <img 
                src={tasker.image || 'https://via.placeholder.com/150'} 
                alt={tasker.name}
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold">{tasker.name}</h1>
              
              <div className="flex items-center mt-1 text-gray-600">
                <User className="h-4 w-4 mr-1" />
                <span>{tasker.city}</span>
                
                <span className="mx-2">•</span>
                
                <Clock className="h-4 w-4 mr-1" />
                <span>
                  {tasker.years_experience} {t('years.experience')}
                </span>
              </div>
              
              <div className="flex items-center mt-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium">{tasker.rating}</span>
                <span className="text-gray-600 ml-2">({tasker.tasks_completed} {t('tasks')})</span>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {tasker.languages.map((lang, i) => (
                  <span 
                    key={i}
                    className="px-2 py-0.5 bg-gray-100 text-gray-800 text-xs rounded-full"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <Button className="gap-2 bg-green-600 hover:bg-green-700">
                  <WhatsApp className="h-4 w-4" />
                  {t('contact.whatsapp')}
                </Button>
              </a>
            </div>
          </div>
          
          {tasker.bio && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">{t('about')}</h2>
              <p className="text-gray-700">{tasker.bio}</p>
            </div>
          )}
        </div>
        
        {/* Specialties */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">{t('specialties')}</h2>
          
          <div className="space-y-4">
            {specialties.map(specialty => (
              <div key={specialty.id} className="flex flex-col">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg">
                      {t(`category.${specialty.specialty}`) || specialty.specialty}
                    </h3>
                    {specialty.description && (
                      <p className="text-gray-600 mt-1">{specialty.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Portfolio */}
        {portfolio.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">{t('portfolio')}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {portfolio.map(image => (
                <div key={image.id} className="group relative aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                  <img 
                    src={image.image_url} 
                    alt={image.title || tasker.name} 
                    className="w-full h-[200px] object-cover transition-transform group-hover:scale-105" 
                  />
                  {image.title && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-4 text-white">
                        <h3>{image.title}</h3>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TaskerProfilePage;
