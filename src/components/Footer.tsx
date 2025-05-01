
import React from 'react';
import { Facebook, Instagram, MessageSquare } from "lucide-react";
import LanguageSelector from './LanguageSelector';

const Footer = () => {
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
              <a href="#services" className="block text-gray-400 hover:text-white">Find Local Services</a>
              <a href="#nearby" className="block text-gray-400 hover:text-white">Services Near Me</a>
              <a href="#cost" className="block text-gray-400 hover:text-white">Cost Calculator</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">For Service Pros</h3>
            <div className="space-y-2">
              <a href="#register" className="block text-gray-400 hover:text-white">Register Business</a>
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
              <a href="#about" className="block text-gray-400 hover:text-white">How it Works</a>
              <a href="#careers" className="block text-gray-400 hover:text-white">Careers</a>
              <a href="#contact" className="block text-gray-400 hover:text-white">Contact Us</a>
            </div>
          </div>
        </div>

        {/* App Download CTA */}
        <div className="mb-8 p-6 bg-gray-800 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Get the L'Maalem App</h3>
              <p className="text-gray-400 mt-2">Coming Soon to iOS and Android</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-black px-4 py-2 rounded-lg flex items-center opacity-50 cursor-not-allowed">
                <span className="ml-2">App Store</span>
              </button>
              <button className="bg-black px-4 py-2 rounded-lg flex items-center opacity-50 cursor-not-allowed">
                <span className="ml-2">Google Play</span>
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
              <MessageSquare className="h-5 w-5 mr-2" /> +212 555-123456
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <MessageSquare className="h-6 w-6" />
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
            <a href="#terms" className="hover:text-white">Terms of Use</a>
            <span>|</span>
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
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
