
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Is it free to post a task?",
      answer: "Yes, posting a task on L'Maalem is completely free. You only pay when you hire a tasker and the job is completed to your satisfaction."
    },
    {
      question: "How do I pay for tasks?",
      answer: "L'Maalem offers secure in-app payments. You can pay with credit/debit cards or through mobile payment services. Payment is only released to the tasker once you confirm the job is complete."
    },
    {
      question: "Are taskers vetted by L'Maalem?",
      answer: "Yes, all taskers go through a comprehensive verification process including ID checks, background screening, and skills assessment before they can offer services on our platform."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "Customer satisfaction is our priority. If you're not satisfied, you can discuss with your tasker first to resolve the issue. If needed, our support team can help mediate or arrange for another tasker."
    },
    {
      question: "How soon can I get a task done?",
      answer: "Depending on availability, you can book taskers as soon as the same day. Many of our professionals offer same-day or next-day service for urgent tasks."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16" id="faq">
      <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
