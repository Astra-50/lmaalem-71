
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import TrustMetrics from '@/components/TrustMetrics';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{t('about.title')}</h1>
          
          <div className="prose prose-lg max-w-none mb-12">
            <h2>Our Mission</h2>
            <p>
              At L'Maalem, our mission is to connect everyday people in Morocco with skilled local craftsmen for all their home service needs. We believe everyone should have easy access to trusted professionals who can help with tasks big and small.
            </p>
            
            <h2>Our Story</h2>
            <p>
              L'Maalem was founded in 2023 out of a simple problem: finding reliable skilled workers in Morocco was difficult. Our founders experienced the challenge firsthand when they needed various services for their homes, from plumbing to electrical work.
            </p>
            <p>
              We noticed that while there were many talented craftsmen across Morocco, there wasn't a simple way for people to find and connect with them. At the same time, many skilled workers relied solely on word-of-mouth to find clients.
            </p>
            <p>
              L'Maalem bridges this gap by creating a platform where clients can easily find trusted professionals, and craftsmen can showcase their skills and get connected with people who need their services.
            </p>
            
            <h2>How It Works</h2>
            <p>
              Our platform is simple: clients can browse through verified craftsmen in their area, view their skills and experience, and connect directly via WhatsApp. No complicated booking systems or middlemen—just direct connections between clients and professionals.
            </p>
            <p>
              For craftsmen, we offer a digital presence and access to clients who are actively looking for their services. By joining L'Maalem, skilled workers can grow their businesses and connect with more clients than ever before.
            </p>
            
            <h2>Our Values</h2>
            <p>
              <strong>Trust:</strong> We carefully verify our service providers to ensure quality and reliability.<br />
              <strong>Simplicity:</strong> We keep our platform straightforward and easy to use for everyone.<br />
              <strong>Community:</strong> We believe in building a community of skilled workers who take pride in their craft.<br />
              <strong>Empowerment:</strong> We aim to empower local craftsmen by giving them tools to grow their businesses.
            </p>
          </div>
          
          <TrustMetrics />
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
