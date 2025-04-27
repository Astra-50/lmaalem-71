
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "سارة، الدار البيضاء / Sarah, Casablanca",
      quote: "L'Maalem made finding a reliable electrician so easy. He arrived on time and fixed my issues quickly!",
      rating: 5,
    },
    {
      id: 2,
      name: "محمد، الرباط / Mohammed, Rabat",
      quote: "Great experience with the furniture assembly service. Professional, fast, and very friendly!",
      rating: 5,
    },
    {
      id: 3,
      name: "ليلى، طنجة / Leila, Tangier",
      quote: "I use L'Maalem regularly for home repairs. The app is simple and the taskers are always professional.",
      rating: 4,
    },
    {
      id: 4,
      name: "كريم، مراكش / Karim, Marrakech",
      quote: "The plumber I found through L'Maalem saved me from a major water disaster. Highly recommended!",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "fill-secondary text-secondary" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50" id="testimonials">
      <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border shadow-sm h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                  <blockquote className="italic text-gray-700 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer className="mt-6 font-medium">{testimonial.name}</footer>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8 gap-2">
          <CarouselPrevious className="relative static" />
          <CarouselNext className="relative static" />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
