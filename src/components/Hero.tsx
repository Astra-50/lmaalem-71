
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Arabic Headline */}
          <h1 className="font-arabic text-4xl md:text-5xl font-bold mb-3 text-primary">
            مع L'Maalem، المهام بسيطة
          </h1>
          
          {/* English Headline */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            With L'Maalem, tasks made simple.
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl mb-8 text-gray-700">
            Find a trusted craftsman in minutes—cleaning, assembly, repairs & more.
          </p>
          
          {/* Trust Badges */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-full shadow-md">
                <div className="text-xl font-bold text-primary">100+</div>
              </div>
              <span className="ml-2 text-gray-700">Tasks Completed</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-full shadow-md">
                <div className="text-xl font-bold text-secondary">4.8★</div>
              </div>
              <span className="ml-2 text-gray-700">Average Rating</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg rounded-full shadow-md"
            >
              <span className="font-arabic mr-1">أنشئ مهمتك</span> / Post a Task
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg rounded-full border-2 border-secondary text-secondary hover:bg-secondary/10 shadow-md"
            >
              <span className="font-arabic mr-1">كن المعلم</span> / Become a Master
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
