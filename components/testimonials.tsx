'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'John S.',
    date: '2 months ago',
    text: 'I called Lakewood Garage Door Repair Experts when my spring broke on a Sunday morning. They were at my house within 2 hours. The technician was polite, explained the problem, and had it fixed quickly. Pricing was fair and transparent. Highly recommend!',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=John+S&background=random'
  },
  {
    name: 'Maria G.',
    date: '4 months ago',
    text: 'Excellent service! My garage door was completely off the tracks and wouldn\'t close. They came out the same day, got it back on track, and even lubricated all the hinges and rollers. It\'s quieter now than it was when we moved in.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Maria+G&background=random'
  },
  {
    name: 'Robert D.',
    date: '6 months ago',
    text: 'Very professional team. They installed a new LiftMaster opener for us. The installation was clean, and they took the time to show us how to use the app and program the remotes. Great experience from start to finish.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Robert+D&background=random'
  },
  {
    name: 'Emily W.',
    date: '8 months ago',
    text: 'Fantastic service! The technician was very knowledgeable and fixed our garage door opener in less than an hour. Highly recommended for anyone in Lakewood.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Emily+W&background=random'
  },
  {
    name: 'Michael B.',
    date: '1 year ago',
    text: 'I was worried about the cost of replacing my broken springs, but their pricing was very fair. The work was done quickly and safely. Great local business.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Michael+B&background=random'
  },
  {
    name: 'Sarah T.',
    date: '1 year ago',
    text: 'They came out the same day I called. The technician was polite, explained everything clearly, and didn\'t try to upsell me on things I didn\'t need. 5 stars!',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Sarah+T&background=random'
  }
];

export function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <div className="flex flex-col items-center">
      <div className="grid md:grid-cols-3 gap-8 w-full">
        {displayedTestimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 relative hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold">{testimonial.name}</h4>
                <p className="text-xs text-slate-500">{testimonial.date}</p>
              </div>
              <div className="ml-auto">
                {/* Google G Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                </svg>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#FBBC05] fill-current" />
              ))}
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
      
      {testimonials.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-12 bg-transparent hover:bg-slate-800 text-white px-8 py-3 rounded-md font-medium transition-colors border border-slate-700"
        >
          {showAll ? 'Show Less' : 'Show More Reviews'}
        </button>
      )}
    </div>
  );
}
