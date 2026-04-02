import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: 'Lakewood, CO',
    text: 'My garage door spring snapped at 9 PM on a Friday. They were here within an hour and had it fixed before midnight. Incredible service and very professional.',
    rating: 5,
    image: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    name: 'Michael T.',
    location: 'Golden, CO',
    text: 'Replaced my old noisy chain opener with a new ultra-quiet belt drive. The technician explained everything clearly and the price was exactly what was quoted.',
    rating: 5,
    image: 'https://picsum.photos/seed/michael/100/100'
  },
  {
    name: 'David R.',
    location: 'Wheat Ridge, CO',
    text: 'Honest company. Another place told me I needed a whole new door. These guys came out, realigned the tracks, replaced a few rollers, and it works like new for a fraction of the cost.',
    rating: 5,
    image: 'https://picsum.photos/seed/david/100/100'
  }
];

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative hover:border-orange-500/30 transition-colors"
        >
          <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-800 opacity-50" />
          <div className="flex gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
            ))}
          </div>
          <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed">
            &quot;{testimonial.text}&quot;
          </p>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-800">
              <Image 
                src={testimonial.image} 
                alt={testimonial.name} 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="text-white font-bold">{testimonial.name}</h4>
              <p className="text-sm text-slate-500">{testimonial.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
