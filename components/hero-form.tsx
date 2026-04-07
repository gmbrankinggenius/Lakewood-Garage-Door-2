'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function HeroForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      service: formData.get('service')
    };

    try {
      await fetch("https://formsubmit.co/ajax/lakewoodgaragedoorrepairexpert@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
      
      <div className="mb-6 text-center lg:text-left">
        <h3 className="font-heading text-2xl font-bold text-white mb-2">Request a Free Quote</h3>
        <p className="text-slate-400 text-sm">Fill out the form below and we&apos;ll contact you within 15 minutes.</p>
      </div>

      {isSubmitted ? (
        <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Request Received!</h4>
          <p className="text-slate-400">An expert will call you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required
              className="w-full bg-slate-950 border border-slate-800 text-white rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors placeholder:text-slate-600"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              required
              className="w-full bg-slate-950 border border-slate-800 text-white rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors placeholder:text-slate-600"
              placeholder="(562) 784-4156"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-1">Service Needed</label>
            <select 
              id="service" 
              name="service"
              required
              defaultValue=""
              className="w-full bg-slate-950 border border-slate-800 text-white rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors appearance-none"
            >
              <option value="" disabled>Select a service...</option>
              <option value="repair">General Repair</option>
              <option value="spring">Spring Replacement</option>
              <option value="opener">Opener Repair/Install</option>
              <option value="new-door">New Door Installation</option>
              <option value="emergency">Emergency Service</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-md transition-all shadow-[0_0_15px_rgba(249,115,22,0.2)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </span>
            ) : (
              <>
                Get Free Estimate <Send className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="text-xs text-center text-slate-500 mt-4">
            No obligation. 100% privacy guaranteed.
          </p>
        </form>
      )}
    </div>
  );
}
