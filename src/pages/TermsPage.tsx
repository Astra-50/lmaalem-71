
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';

const TermsPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{t('terms.title')}</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using L'Maalem services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>
            
            <h2>2. Description of Service</h2>
            <p>
              L'Maalem is a platform that connects clients with local service providers ("craftsmen") in Morocco. We do not employ these service providers directly; we merely facilitate connections between users and service providers.
            </p>
            
            <h2>3. User Responsibilities</h2>
            <p>
              Users agree to provide accurate information when registering and using the service. Users are responsible for maintaining the security of their account.
            </p>
            
            <h2>4. Service Provider Responsibilities</h2>
            <p>
              Service providers agree to provide accurate information about their skills, experience, and services. Service providers are responsible for the quality of their work and for any agreements made with clients.
            </p>
            
            <h2>5. Limitation of Liability</h2>
            <p>
              L'Maalem is not responsible for the quality of services provided by service providers. Users engage with service providers at their own risk.
            </p>
            
            <h2>6. Privacy Policy</h2>
            <p>
              Your use of L'Maalem is also governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            
            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will provide notice of significant changes to the terms by posting the new terms on the site.
            </p>
            
            <h2>8. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at hello@lmaalem.com.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsPage;
