import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, PhoneCall, Mail, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { HeroForm } from '@/components/hero-form';

export const metadata: Metadata = {
  title: 'Contact Us | Lakewood Garage Door Repair Experts',
  description: 'Need garage door repair in Lakewood? Contact us today for 24/7 emergency service, free estimates, and top-quality installation. Call (562) 784-4156 now!',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-orange-500/30">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch with <br/>
              <span className="text-orange-500">Lakewood&apos;s Experts</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Whether it&apos;s an emergency repair or a new installation project, we are here to help. Our team is available 24/7 to provide the support you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-slate-400">1234 Repair Way, Suite 100<br/>Lakewood, CA 90712</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Phone Number</h4>
                    <a href="tel:562-784-4156" className="text-slate-400 hover:text-orange-500 transition-colors">(562) 784-4156</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Email Address</h4>
                    <a href="mailto:lakewoodgaragedoorrepairexpert@gmail.com" className="text-slate-400 hover:text-orange-500 transition-colors">lakewoodgaragedoorrepairexpert@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Working Hours</h4>
                    <p className="text-slate-400">Open 24/7 for Emergency Repairs</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-8 bg-slate-900 border border-slate-800 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-6 h-6 text-orange-500" />
                  <h4 className="text-white font-bold">Certified & Insured</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We are a fully certified, bonded, and insured garage door repair company. Every technician undergoes rigorous background checks and continuous training to ensure the highest standards of safety and quality.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/5 blur-[100px] rounded-full -z-10"></div>
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="aspect-[21/9] bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center overflow-hidden relative">
            <Image 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
              alt="Map Location" 
              fill 
              className="object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Serving All of Lakewood</h3>
              <p className="text-slate-400">And surrounding areas within a 30-mile radius.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
