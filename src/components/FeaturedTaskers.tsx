
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useTaskers } from '@/hooks/use-tasker-data';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturedTaskers = () => {
  const { t } = useLanguage();
  const { data: taskers = [], isLoading } = useTaskers();
  
  // Get up to 4 featured taskers (highest rated)
  const featuredTaskers = [...(taskers || [])]
    .sort((a, b) => b.rating - a.rating || b.tasks_completed - a.tasks_completed)
    .slice(0, 4);

  const featuredTitle = t('featured.taskers');
  const viewAllText = t('view.all.taskers');
  const tasksLabel = t('tasks');

  return (
    <div className="container mx-auto px-4 py-16" id="featured-taskers">
      <h2 className="text-3xl font-bold mb-6">{featuredTitle || 'Featured Taskers'}</h2>
      
      <div className="relative overflow-x-auto pb-6">
        <div className="flex space-x-4 min-w-max">
          {isLoading ? (
            // Loading skeletons
            Array(4).fill(0).map((_, i) => (
              <Card key={`skeleton-${i}`} className="w-64 flex-shrink-0 shadow-sm animate-pulse">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gray-300 mb-4" />
                    <div className="h-5 w-24 bg-gray-300 mb-2 rounded" />
                    <div className="h-4 w-20 bg-gray-300 mb-4 rounded" />
                    <div className="h-4 w-16 bg-gray-300 rounded" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            featuredTaskers.map((tasker) => (
              <Link to={`/tasker/${tasker.id}`} key={tasker.id}>
                <Card className="w-64 flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center">
                      <img 
                        src={tasker.image || "https://via.placeholder.com/150"} 
                        alt={tasker.name}
                        className="w-24 h-24 rounded-full object-cover mb-4" 
                      />
                      <h3 className="font-bold text-lg">{tasker.name}</h3>
                      <p className="text-primary">{tasker.city}</p>
                      <div className="flex items-center mt-2">
                        <Star className="h-4 w-4 fill-secondary text-secondary mr-1" />
                        <span className="font-medium">{tasker.rating}</span>
                        <span className="text-gray-500 ml-2">({tasker.tasks_completed} {tasksLabel})</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
      
      <div className="text-center mt-6">
        <Link to="/services/trending">
          <button className="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors">
            {viewAllText || 'View All Taskers'}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedTaskers;
