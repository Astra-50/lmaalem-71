
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTaskers } from '@/hooks/use-tasker-data';

// Map route parameters to specialty categories
const categoryMapping: Record<string, string> = {
  assembly: "assembly",
  mounting: "mounting", 
  moving: "moving",
  cleaning: "cleaning",
  outdoor: "outdoor",
  repairs: "repairs",
  painting: "painting",
  trending: "trending"
};

const ServicePage = () => {
  const { category } = useParams<{ category: string }>();
  const { t } = useLanguage();
  const [selectedCity, setSelectedCity] = useState<string>("");
  
  const specialty = category ? categoryMapping[category] : '';
  
  // Skip fetching data for "trending" category
  const { data: taskers = [], isLoading } = useTaskers(
    specialty === "trending" ? undefined : specialty,
    selectedCity || undefined
  );
  
  // Cities list for filtering
  const cities = ["Casablanca", "Rabat", "Salé"];
  
  // Get display name for category
  const getCategoryDisplayName = (categoryKey: string) => {
    switch(categoryKey) {
      case 'assembly': return t('category.assembly');
      case 'mounting': return t('category.mounting');
      case 'moving': return t('category.moving');
      case 'cleaning': return t('category.cleaning');
      case 'outdoor': return t('category.outdoor');
      case 'repairs': return t('category.repairs');
      case 'painting': return t('category.painting');
      case 'trending': return t('category.trending');
      default: return categoryKey;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header with back button */}
      <header className="bg-white border-b sticky top-0 z-10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('back.home')}
              </Button>
            </Link>
            
            <span className="text-xl font-bold">
              {specialty ? getCategoryDisplayName(specialty) : t('services')}
            </span>
            
            <div className="w-24"></div> {/* Spacer for balanced layout */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* City filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedCity === "" ? "default" : "outline"}
              onClick={() => setSelectedCity("")}
            >
              {t('all.cities')}
            </Button>
            
            {cities.map(city => (
              <Button 
                key={city}
                variant={selectedCity === city ? "default" : "outline"}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </Button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">
            {specialty ? getCategoryDisplayName(specialty) : t('services')}
          </h1>
          <p className="text-gray-600">
            {isLoading ? t('loading') : `${taskers.length} ${t('taskers.available')}`}
          </p>
        </div>

        {/* Taskers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array(6).fill(0).map((_, i) => (
              <Card key={`skeleton-${i}`} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="animate-pulse">
                    <div className="bg-gray-300 h-48 w-full" />
                    <div className="p-4">
                      <div className="h-6 bg-gray-300 rounded w-2/3 mb-2" />
                      <div className="h-4 bg-gray-300 rounded w-1/3 mb-4" />
                      <div className="h-16 bg-gray-300 rounded w-full mb-4" />
                      <div className="h-10 bg-gray-300 rounded w-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : taskers.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-500">{t('no.taskers.found')}</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSelectedCity("")}
              >
                {t('clear.filters')}
              </Button>
            </div>
          ) : (
            taskers.map(tasker => (
              <Card key={tasker.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={tasker.image || "https://via.placeholder.com/300"} 
                      alt={tasker.name}
                      className="w-full h-48 object-cover" 
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{tasker.name}</h3>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-medium">{tasker.rating}</span>
                          <span className="text-gray-500 ml-2">({tasker.tasks_completed} {t('tasks')})</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                      {tasker.bio}
                    </p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                        {tasker.city}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                        {tasker.years_experience} {t('years')}
                      </span>
                    </div>
                    
                    <Link to={`/tasker/${tasker.id}`}>
                      <Button className="w-full mt-4">
                        {t('view.profile')}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default ServicePage;
