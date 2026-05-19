import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Users, Award, Clock, PhoneCall, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Lakewood Garage Door Repair Experts',
  description: 'Learn about Lakewood Garage Door Repair Experts. We are a family-owned business providing top-quality garage door services in Lakewood for over 15 years.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-orange-500/30">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Lakewood&apos;s Most Trusted <br/>
              <span className="text-orange-500">Garage Door Specialists</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              For over 15 years, we have been the go-to choice for homeowners in Lakewood and the surrounding areas. Our commitment to quality, transparency, and speed has built our reputation as the #1 rated service in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden border border-slate-800 relative">
                <Image 
                  src="/hero-bg.jpg" 
                  alt="Our Team" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-8 rounded-xl shadow-2xl">
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="text-sm font-medium uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Founded in Lakewood, our journey began with a simple mission: to provide honest, high-quality garage door services that neighbors could rely on. We saw a need for a service that combined technical expertise with genuine customer care.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Today, we have grown into a full-service team of certified technicians, but our core values remain the same. We treat every home as if it were our own, ensuring that every repair is safe, durable, and fairly priced.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Certified</h4>
                    <p className="text-xs text-slate-500">Fully bonded and insured for your protection.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Local</h4>
                    <p className="text-xs text-slate-500">Proudly serving the Lakewood community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-slate-400">The principles that guide every service call we make.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity First', desc: 'We provide honest assessments and upfront pricing. No hidden fees, ever.', icon: Award },
              { title: 'Safety Always', desc: 'Garage doors are heavy and dangerous. We prioritize the safety of your family and home.', icon: ShieldCheck },
              { title: '24/7 Reliability', desc: 'We know emergencies don\'t wait. That\'s why we are available around the clock.', icon: Clock }
            ].map((value, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-orange-500/30 transition-colors">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">Contact Lakewood&apos;s most trusted team today for a free estimate on any repair or installation.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center gap-2">
              Contact Us Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:562-784-4156" className="text-white font-bold text-lg hover:text-orange-500 transition-colors">
              Or Call (562) 784-4156
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
