
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Choose a Tasker by price, skills, and reviews.",
      bgColor: "bg-purple-100"
    },
    {
      number: 2,
      title: "Schedule a Tasker as early as today.",
      bgColor: "bg-yellow-100"
    },
    {
      number: 3,
      title: "Chat, pay, tip, and review all in one place.",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12">How it works</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className={`${step.bgColor} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="text-xl font-semibold">{step.number}</span>
              </div>
              <p className="text-xl mt-2">{step.title}</p>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <img 
            src="/lovable-uploads/ae9036a0-6da3-46c1-8b59-696a0d8a146d.png"
            alt="Person using the L'Maalem app"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
