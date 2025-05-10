
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{t('contact.title')}</h1>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t('job.name.label')}</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                >
                  {t('submit.button')}
                </Button>
              </form>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
              
              <div className="space-y-4">
                <p>
                  Have questions, feedback, or suggestions? We'd love to hear from you. Fill out the form or contact us directly using the information below.
                </p>
                
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>hello@lmaalem.com</p>
                </div>
                
                <div>
                  <p className="font-semibold">Phone:</p>
                  <p>+212 XXXXXXXXX</p>
                </div>
                
                <div>
                  <p className="font-semibold">WhatsApp:</p>
                  <a 
                    href="https://wa.me/212XXXXXXXXX" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send us a message
                  </a>
                </div>
                
                <div>
                  <p className="font-semibold">Address:</p>
                  <p>123 Business Street<br />Casablanca, Morocco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
