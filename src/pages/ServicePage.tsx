
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

// Enhanced tasker data with categories
const taskersData = [
  {
    id: 1,
    name: "Ahmed M.",
    specialties: ["assembly", "repairs"],
    rating: 4.9,
    tasks: 56,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    bio: "Experienced in furniture assembly and home repairs with 3+ years of professional work."
  },
  {
    id: 2,
    name: "Fatima R.",
    specialties: ["cleaning", "mounting"],
    rating: 5.0,
    tasks: 124,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    bio: "Professional cleaner with attention to detail. Specialized in deep cleaning and organization."
  },
  {
    id: 3,
    name: "Omar K.",
    specialties: ["assembly", "moving"],
    rating: 4.8,
    tasks: 89,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    bio: "Expert in furniture assembly. Can put together any item quickly and efficiently."
  },
  {
    id: 4,
    name: "Yasmine B.",
    specialties: ["painting", "repairs"],
    rating: 4.9,
    tasks: 72,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
    bio: "Professional painter with 5+ years experience in interior and exterior painting."
  },
  {
    id: 5,
    name: "Hassan T.",
    specialties: ["painting", "mounting"],
    rating: 4.7,
    tasks: 48,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=300&h=300&fit=crop",
    bio: "Painter specializing in decorative techniques and color consultation."
  },
  {
    id: 6,
    name: "Leila M.",
    specialties: ["cleaning", "outdoor"],
    rating: 4.8,
    tasks: 95,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    bio: "Offers thorough cleaning services for homes and apartments. Also helps with outdoor maintenance."
  },
  {
    id: 7,
    name: "Karim B.",
    specialties: ["moving", "assembly"],
    rating: 4.6,
    tasks: 63,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    bio: "Strong and efficient. Can help with any moving tasks and furniture assembly."
  },
  {
    id: 8,
    name: "Samira H.",
    specialties: ["repairs", "mounting"],
    rating: 4.9,
    tasks: 81,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    bio: "Skilled at all kinds of home repairs. No job too small or complex."
  }
];

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
  
  const specialty = category ? categoryMapping[category] : '';
  
  // Filter taskers by specialty
  const filteredTaskers = specialty ? 
    taskersData.filter(tasker => tasker.specialties.includes(specialty)) : 
    taskersData;

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
        {/* Results count */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">
            {specialty ? getCategoryDisplayName(specialty) : t('services')}
          </h1>
          <p className="text-gray-600">
            {filteredTaskers.length} {t('taskers.available')}
          </p>
        </div>

        {/* Taskers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTaskers.map(tasker => (
            <Card key={tasker.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={tasker.image} 
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
                        <span className="text-gray-500 ml-2">({tasker.tasks} {t('tasks')})</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                    {tasker.bio}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tasker.specialties.map(spec => (
                      <span 
                        key={`${tasker.id}-${spec}`}
                        className="px-2 py-1 bg-gray-100 text-xs rounded-full"
                      >
                        {getCategoryDisplayName(spec)}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-4">
                    {t('view.profile')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ServicePage;
