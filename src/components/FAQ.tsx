import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "What makes Niner Research different from traditional survey platforms?",
      answer: "Niner Research uses AI-powered adaptive interviews that evolve in real-time based on responses, capturing insights from traditionally silent voices. Unlike static surveys, our platform creates personalized conversations that dramatically reduce non-response bias and increase engagement rates."
    },
    {
      question: "How does the AI adaptive interview technology work?",
      answer: "Our AI analyzes responses in real-time and adjusts questions dynamically to create a more natural, conversational experience. This approach makes participants feel heard and understood, resulting in richer data and higher completion rates compared to traditional surveys."
    },
    {
      question: "How do you handle data privacy and security?",
      answer: "We take data privacy seriously with enterprise-grade security, end-to-end encryption, and full compliance with GDPR, CCPA, and other privacy regulations. All participant data is anonymized and stored securely, with customizable retention policies."
    },
    {
      question: "Can Niner Research integrate with our existing tools?",
      answer: "Yes, Niner Research offers seamless integration with popular CRM systems, analytics platforms, and data warehouses. Our API and webhook support allow for real-time data synchronization with your existing tech stack."
    },
    {
      question: "What industries benefit most from Niner Research?",
      answer: "While our platform serves various industries, we see exceptional results in HR & Employee Experience, Market Research, Healthcare, Education, and Government sectors where understanding diverse perspectives and reducing bias is critical."
    },
    {
      question: "How quickly can I get started?",
      answer: "You can launch your first adaptive interview within hours. Our intuitive platform includes templates and AI assistance to help you create effective interviews quickly. Most clients see their first results within 24-48 hours of launch."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide comprehensive support including onboarding assistance, best practices training, and dedicated customer success managers for enterprise clients. Our team of research experts is available to help optimize your interviews for maximum impact."
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 text-center mb-12">Everything you need to know about Niner Research</p>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;