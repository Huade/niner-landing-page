import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
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

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">Frequently Asked Questions</h2>
        <p className="text-base text-gray-600 text-center mb-10">Understanding the future of survey research</p>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <h3 className="text-base font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;