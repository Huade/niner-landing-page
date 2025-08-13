import React, { memo, useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs: FAQItem[] = [
    {
      question: "Why are traditional polls failing?",
      answer: "Response rates have collapsed from 40% to less than 1%. The people who respond are no longer representative of the population, creating systematic biases that conventional weighting can't fix."
    },
    {
      question: "How does Niner Research solve non-response bias?",
      answer: "We use response instruments and modern statistical methods to measure and correct for who responds versus who doesn't, revealing the true opinions of the silent majority."
    },
    {
      question: "What makes AI-powered surveys better?",
      answer: "Our chatbots conduct natural conversations instead of fixed-format questions, probing deeper into respondent thinking and achieving dramatically higher engagement than traditional surveys."
    },
    {
      question: "Is this more expensive than traditional polling?",
      answer: "No. While high-quality phone polls require 500,000+ calls for 4,000 responses, our automated AI approach delivers better data at a fraction of the cost."
    },
    {
      question: "Which industries need this most?",
      answer: "Political polling, market research, government census data, healthcare surveys, financial services, and academic research - anywhere response bias undermines data quality."
    },
    {
      question: "How do you handle Trump voters and hard-to-reach populations?",
      answer: "Our methods specifically address the systematic polling failures of 2016-2020 by correcting for populations that traditional polls miss, especially in key demographics."
    },
    {
      question: "Can you really trust AI to conduct surveys?",
      answer: "Our chatbots are trained on labeled data and fine-tuned daily with context. They generate more authentic responses than rigid questionnaires while maintaining scientific rigor."
    },
    {
      question: "What's the technical innovation?",
      answer: "We implement sampling theory for non-random samples, use response instruments to measure bias, and apply high-dimensional language models to extract insights from natural conversation."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="niner-section" id="faq" style={{backgroundColor: 'var(--niner-secondary-50)'}}>
      <div className="niner-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3" style={{color: 'var(--niner-secondary-900)'}}>Frequently Asked Questions</h2>
        <p className="text-base text-center mb-10" style={{color: 'var(--niner-secondary-600)'}}>Understanding the future of survey research</p>
        
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg overflow-hidden transition-all duration-300 border ${
                openIndex === index ? 'border-gray-300 bg-gray-50' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{minHeight: '44px'}}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-base font-semibold pr-4" style={{color: 'var(--niner-secondary-900)'}}>
                  {faq.question}
                </h3>
                <svg 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  style={{color: 'var(--niner-primary-600)'}}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-4">
                  <p className="text-sm leading-relaxed" style={{color: 'var(--niner-secondary-600)', fontSize: 'var(--niner-text-sm)'}}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

FAQ.displayName = 'FAQ';

export default FAQ;