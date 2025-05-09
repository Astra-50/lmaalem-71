
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FeaturedTaskers from "@/components/FeaturedTaskers";
import FAQ from "@/components/FAQ";
import TrustMetrics from '@/components/TrustMetrics';
import ContactCTA from '@/components/ContactCTA';
import AppPromotion from '@/components/AppPromotion';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section>
          <Hero />
        </section>

        {/* How it works */}
        <section className="border-t" id="how-it-works">
          <HowItWorks />
        </section>

        {/* Service Categories */}
        <section className="border-t border-b" id="services">
          <ServiceCategories />
        </section>

        {/* Featured Taskers */}
        <section className="py-16 bg-gray-50">
          <FeaturedTaskers />
        </section>

        {/* Contact CTA Section */}
        <section id="join">
          <ContactCTA />
        </section>

        {/* Testimonials */}
        <section>
          <Testimonials />
        </section>

        {/* App Promotion */}
        <section>
          <AppPromotion />
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50">
          <FAQ />
        </section>

        {/* Trust Metrics */}
        <TrustMetrics />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
