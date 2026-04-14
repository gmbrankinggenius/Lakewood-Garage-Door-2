import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Emergency Garage Door Cable Repair in Lakewood, CA',
  description: 'Snapped or frayed garage door cables? We offer 24/7 emergency cable replacement in Lakewood, CA using aircraft-grade steel. Fast, safe, and reliable.',
  keywords: ['garage door cable repair Lakewood', 'snapped garage door cable', 'fix garage door wire', 'Lakewood CA cable replacement', 'garage door off track cable'],
};

export default function CableRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Garage Door Cable Repair",
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
    "description": "Fast and safe garage door cable repair in Lakewood, CA. We replace snapped or frayed cables with aircraft-grade steel.",
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
              Emergency Garage Door <span className="text-orange-500">Cable Repair in Lakewood</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Is your garage door hanging crooked or completely stuck? You likely have a snapped lifting cable. Our local Lakewood, CA technicians provide rapid, 24/7 emergency cable replacement using high-strength, aircraft-grade steel.
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
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop" 
                  alt="Garage Door Cable Repair" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Why Lakewood Trusts Us for Cable Replacement</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>24/7 Emergency Service:</strong> A snapped cable leaves your door dangerously unbalanced or stuck open. We dispatch local technicians immediately to secure your home.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Aircraft-Grade Steel Cables:</strong> We don&apos;t use cheap wire. We install heavy-duty, galvanized steel cables designed to lift the heaviest custom doors without fraying.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Complete System Rebalancing:</strong> When a cable breaks, the door goes off-track. We fix the cable, re-spool the drums, and perfectly balance the spring tension.</span>
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
          <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">What to Know About Garage Door Cables</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Signs Your Garage Door Cable is Broken or Failing</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Catching cable issues early can prevent a catastrophic failure. Look out for these warning signs in your Lakewood garage:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Crooked Door:</strong> If one side of the door sits higher than the other, a cable has likely snapped or slipped off the drum.</li>
                <li><strong>Fraying or Splintering:</strong> If you see individual wire strands breaking around the bottom bracket, the cable is nearing the end of its life.</li>
                <li><strong>Slack or Loose Wire:</strong> If the cables are hanging loosely when the door is open, the tension is incorrect and the cable may jump the drum.</li>
                <li><strong>Door is Stuck:</strong> The motor runs, but the door won&apos;t lift because the physical connection (the cable) is severed.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">What Do Garage Door Cables Actually Do?</h3>
              <p className="text-slate-300 leading-relaxed">
                Garage door cables work in tandem with the torsion springs to safely lift and lower the heavy door. While the springs provide the immense tension and lifting power, the cables are the physical connection that transfers that power to the bottom of the door. If a lifting cable snaps, the door becomes entirely unbalanced and creates a severe safety hazard.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Our Professional Cable Replacement Process</h3>
              <p className="text-slate-300 leading-relaxed">
                When we replace your cables, we don&apos;t just swap the wire. We inspect the entire lifting system. We check the bottom brackets for rust (common in coastal California climates), ensure the cable drums are un-damaged, and verify the spring tension is perfectly balanced. We <strong>always replace cables in pairs</strong> to ensure even lifting and prevent the older cable from snapping shortly after the repair.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
