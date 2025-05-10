
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';

const PrivacyPolicyPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{t('privacy.title')}</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, update your profile, use interactive features, fill out a form, request customer support, or otherwise communicate with us.
            </p>
            
            <h2>2. How We Use Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send confirmations, and deliver the services requested.
            </p>
            
            <h2>3. Information Sharing</h2>
            <p>
              We may share your information with service providers who need access to perform services on our behalf. We may also share information when we believe in good faith that disclosure is necessary to comply with applicable law or to protect the rights, property, or safety of L'Maalem, our customers, or others.
            </p>
            
            <h2>4. Your Choices</h2>
            <p>
              You can update your account information and preferences at any time by contacting us. You can also opt out of receiving promotional emails by following the instructions in those emails.
            </p>
            
            <h2>5. Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
            </p>
            
            <h2>6. Changes to this Policy</h2>
            <p>
              We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide additional notice.
            </p>
            
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at hello@lmaalem.com.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicyPage;
