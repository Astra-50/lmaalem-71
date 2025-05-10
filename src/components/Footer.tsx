
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import LanguageSelector from './LanguageSelector';
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const popularCities = [
    "Casablanca", "Rabat", "Fes", "Marrakech", "Agadir", "Tangier", "Meknes", 
    "Oujda", "Kenitra", "Tetouan"
  ];

  return (
    <footer className="bg-gray-900 text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        {/* Popular Cities */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Popular Cities</h3>
          <div className="flex flex-wrap gap-2">
            {popularCities.map((city) => (
              <a
                key={city}
                href={`#${city.toLowerCase()}`}
                className="text-gray-400 hover:text-white"
              >
                {city}
                <span className="mx-2 last:hidden">|</span>
              </a>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Homeowner Services</h3>
            <div className="space-y-2">
              <Link to="/services/all" className="block text-gray-400 hover:text-white">Find Local Services</Link>
              <Link to="/request-job" className="block text-gray-400 hover:text-white">Request a Service</Link>
              <a href="#cost" className="block text-gray-400 hover:text-white">Cost Calculator</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">For Service Pros</h3>
            <div className="space-y-2">
              <Link to="/craftsman-signup" className="block text-gray-400 hover:text-white">Register Business</Link>
              <a href="#center" className="block text-gray-400 hover:text-white">Business Center</a>
              <a href="#resources" className="block text-gray-400 hover:text-white">Pro Resources</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <div className="space-y-2">
              <a href="#faq" className="block text-gray-400 hover:text-white">FAQs</a>
              <a href="#membership" className="block text-gray-400 hover:text-white">Membership</a>
              <a href="#financing" className="block text-gray-400 hover:text-white">Financing</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white">About L'Maalem</Link>
              <a href="#careers" className="block text-gray-400 hover:text-white">Careers</a>
              <Link to="/contact" className="block text-gray-400 hover:text-white">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* App Download CTA */}
        <div className="mb-8 p-6 bg-gray-800 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">{t('coming.soon')}</h3>
              <p className="text-gray-400 mt-2">iOS and Android</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-black px-4 py-2 rounded-lg flex items-center opacity-50 cursor-not-allowed">
                <span className="ml-2">{t('app.store')}</span>
              </button>
              <button className="bg-black px-4 py-2 rounded-lg flex items-center opacity-50 cursor-not-allowed">
                <span className="ml-2">{t('play.store')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact and Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">hello@lmaalem.com</p>
            <a href="#whatsapp" className="flex items-center text-gray-400 hover:text-white mt-2">
              <MessageCircle className="h-5 w-5 mr-2" /> +212 555-123456
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Language</h3>
            <LanguageSelector />
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link to="/terms" className="hover:text-white">Terms of Use</Link>
            <span>|</span>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span>|</span>
            <a href="#sitemap" className="hover:text-white">Sitemap</a>
            <span>|</span>
            <a href="#accessibility" className="hover:text-white">Accessibility</a>
          </div>
          <p>© 2024 L'Maalem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
