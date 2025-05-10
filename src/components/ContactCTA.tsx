
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  const { t } = useLanguage();
  
  // WhatsApp deep link for craftsman signup
  const craftsmanWhatsappLink = "https://wa.me/212XXXXXXXXX?text=I%20want%20to%20join%20L'Maalem%20as%20a%20craftsman";
  
  // WhatsApp deep link for client service request
  const clientWhatsappLink = "https://wa.me/212XXXXXXXXX?text=I%20need%20to%20request%20a%20service";

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          {/* For Craftsmen */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4">For Craftsmen</h3>
            <p className="text-gray-600 mb-6">
              Are you a skilled professional looking for more clients? Join L'Maalem network and get connected with people who need your services.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">1</span>
                <span>Create your professional profile</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">2</span>
                <span>Showcase your skills and portfolio</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">3</span>
                <span>Get connected with clients via WhatsApp</span>
              </li>
            </ul>
            <a href={craftsmanWhatsappLink} target="_blank" rel="noreferrer">
              <Button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700">
                <MessageCircle className="h-4 w-4" />
                Join as a Craftsman
              </Button>
            </a>
          </div>
          
          {/* For Clients */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4">For Clients</h3>
            <p className="text-gray-600 mb-6">
              Need help with a task? L'Maalem connects you with trusted local professionals to get your job done right.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">1</span>
                <span>Browse skilled professionals in your area</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">2</span>
                <span>View profiles, specialties and ratings</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">3</span>
                <span>Contact professionals directly via WhatsApp</span>
              </li>
            </ul>
            <a href={clientWhatsappLink} target="_blank" rel="noreferrer">
              <Button className="w-full flex items-center justify-center gap-2">
                Request a Service
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
