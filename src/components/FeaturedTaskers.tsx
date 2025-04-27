
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const FeaturedTaskers = () => {
  const taskers = [
    {
      id: 1,
      name: "Ahmed M.",
      specialty: "Electrical",
      rating: 4.9,
      tasks: 56,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Fatima R.",
      specialty: "Cleaning",
      rating: 5.0,
      tasks: 124,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Omar K.",
      specialty: "Furniture Assembly",
      rating: 4.8,
      tasks: 89,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Yasmine B.",
      specialty: "Painting",
      rating: 4.9,
      tasks: 72,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16" id="featured-taskers">
      <h2 className="text-3xl font-bold mb-6">Featured Taskers</h2>
      
      <div className="relative overflow-x-auto pb-6">
        <div className="flex space-x-4 min-w-max">
          {taskers.map((tasker) => (
            <Card key={tasker.id} className="w-64 flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <img 
                    src={tasker.image} 
                    alt={tasker.name}
                    className="w-24 h-24 rounded-full object-cover mb-4" 
                  />
                  <h3 className="font-bold text-lg">{tasker.name}</h3>
                  <p className="text-primary">{tasker.specialty}</p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 fill-secondary text-secondary mr-1" />
                    <span className="font-medium">{tasker.rating}</span>
                    <span className="text-gray-500 ml-2">({tasker.tasks} tasks)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-6">
        <button className="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors">
          View All Taskers
        </button>
      </div>
    </div>
  );
};

export default FeaturedTaskers;
