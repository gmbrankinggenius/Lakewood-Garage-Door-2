import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Broken Garage Door Spring Repair in Lakewood, CA | Same-Day Service',
  description: 'Snapped garage door spring? We provide expert torsion and extension spring replacement in Lakewood, CA. High-cycle springs, 24/7 emergency service. Call now!',
  keywords: ['garage door spring repair Lakewood', 'broken garage door spring', 'torsion spring replacement', 'Lakewood CA garage door springs', 'emergency spring repair'],
};

export default function SpringReplacementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Garage Door Spring Replacement",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Lakewood Garage Door Repair Experts",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lakewood",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "description": "Expert torsion and extension spring replacement in Lakewood, CA. We use premium high-cycle springs for maximum durability and safety.",
    "areaServed": "Lakewood, CA"
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-orange-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative py-20 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Broken Garage Door <span className="text-orange-500">Spring Replacement in Lakewood</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Did you hear a loud bang? Is your garage door too heavy to lift? You likely have a snapped spring. Our local Lakewood, CA technicians provide same-day torsion and extension spring replacement using heavy-duty, high-cycle parts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-96 rounded-2xl overflow-hidden border border-slate-800">
                <Image 
                  src="https://images.unsplash.com/photo-1534398079543-7ae6d016b8bf?q=80&w=800&auto=format&fit=crop" 
                  alt="Garage Door Spring Replacement" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Why Lakewood Homeowners Choose Us for Spring Repair</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Safety First:</strong> Garage door springs hold up to 300 lbs of tension. Attempting DIY repair is a severe safety hazard. We have the specialized winding bars and training to do it safely.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>High-Cycle Springs (20,000+ Cycles):</strong> We don&apos;t use cheap builder-grade springs. We install premium, oil-tempered springs designed to last 2-3 times longer than standard parts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Same-Day Local Service:</strong> A broken spring means your car is trapped. We dispatch technicians from within Lakewood to get your door open today.</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:562-784-4156" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-bold transition-all flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5" /> Call (562) 784-4156
                </a>
                <Link href="/#contact" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center justify-center gap-2">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">What to Know About Garage Door Springs in Lakewood</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Signs Your Garage Door Spring is Broken</h3>
              <p className="text-slate-300 mb-4">If you are experiencing any of the following, you need immediate spring replacement:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Loud Bang:</strong> You heard a noise sounding like a gunshot or firecracker from the garage.</li>
                <li><strong>Door Won&apos;t Open:</strong> The opener motor hums, the door lifts a few inches, and then stops.</li>
                <li><strong>Heavy Door:</strong> The door feels incredibly heavy (150+ lbs) to lift manually.</li>
                <li><strong>Visible Gap:</strong> You can see a visible 2-inch gap in the coiled spring above the door.</li>
                <li><strong>Crooked Door:</strong> The door lifts unevenly or falls rapidly when closing.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Torsion vs. Extension Springs: What&apos;s the Difference?</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Most residential garage doors in Southern California use one of two systems:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Torsion Springs:</strong> Located horizontally on a metal shaft directly above the door opening. These are the modern standard. They are generally safer because if they break, the pieces remain on the shaft. They provide a smoother operation and support heavier doors.</li>
                <li><strong>Extension Springs:</strong> Located on either side of the door, stretching along the horizontal tracks. When these break, they can fly off dangerously if safety cables aren&apos;t installed. We highly recommend converting old extension systems to torsion.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Why You Shouldn&apos;t DIY Spring Repair</h3>
              <p className="text-slate-300 leading-relaxed">
                Garage door springs hold the entire weight of the door under immense tension. Attempting to adjust or replace them without the proper winding bars, training, and safety equipment can result in severe injury, property damage, or even death. Our local Lakewood technicians are fully certified and insured to handle this dangerous task safely and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
