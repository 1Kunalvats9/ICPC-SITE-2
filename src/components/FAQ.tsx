import React from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What skill level is required to participate?",
      answer: "The competition is designed for intermediate to advanced programmers. Participants should have a strong foundation in algorithms and data structures.",
    },
    {
      question: "What programming languages are allowed?",
      answer: "Participants can use Python, Java, C++, or JavaScript during the competition. The choice of language won't affect scoring.",
    },
    {
      question: "Is the bootcamp mandatory?",
      answer: "While not mandatory, the bootcamp is highly recommended as it provides valuable preparation and insights from industry experts.",
    },
    {
      question: "What happens after registration?",
      answer: "You'll receive a welcome email with detailed instructions, access to practice materials, and your personal schedule for the bootcamp.",
    },
  ];

  return (
    <div id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Plus className="h-5 w-5 text-yellow-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}