'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How much does garage door repair cost in Lakewood?",
    answer: "The cost of garage door repair in Lakewood varies depending on the issue. Minor repairs like sensor alignment might cost $75-$150, while spring replacement typically ranges from $200-$350. We always provide a free, upfront estimate before starting any work."
  },
  {
    question: "Why is my garage door not opening but the motor is running?",
    answer: "If you hear the motor running but the door isn't moving, you likely have a broken torsion spring or a snapped cable. This is a common issue and requires professional repair due to the high tension of the springs. Do not attempt to open the door manually as it can be extremely heavy and dangerous."
  },
  {
    question: "How long do garage door springs last?",
    answer: "Standard garage door springs are rated for about 10,000 cycles (one cycle is opening and closing the door once). For the average household using the door 4 times a day, this equates to about 7 years. We offer high-cycle springs that can last up to 20,000 cycles or more."
  },
  {
    question: "Do you offer 24/7 emergency garage door repair?",
    answer: "Yes! We understand that a broken garage door can happen at the worst times and poses a security risk to your home. Our technicians are on call 24/7 for emergency repairs in Lakewood and surrounding areas."
  },
  {
    question: "Can I replace just one garage door spring?",
    answer: "While it's physically possible, we strongly advise against it. If one spring has broken, the other is likely near the end of its lifespan. Replacing both ensures balanced tension and prevents you from needing another service call in a few weeks."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-slate-800/50 shadow-[0_0_15px_rgba(249,115,22,0.1)]' : 'bg-slate-900 hover:bg-slate-800/30'}`}
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-bold text-lg text-white pr-8">{faq.question}</span>
            <ChevronDown className={`w-5 h-5 text-orange-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
          </button>
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
