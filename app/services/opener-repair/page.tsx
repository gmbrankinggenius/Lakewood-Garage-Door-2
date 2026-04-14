import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Garage Door Opener Repair & Installation in Lakewood, CA',
  description: 'Is your garage door opener humming or not working? We repair and install LiftMaster, Chamberlain, and smart Wi-Fi openers in Lakewood, CA. Call for a quote!',
  keywords: ['garage door opener repair Lakewood', 'LiftMaster installation Lakewood', 'fix garage door motor', 'smart garage door opener CA', 'Chamberlain opener repair'],
};

export default function OpenerRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Garage Door Opener Repair & Installation",
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
    "description": "Professional garage door opener repair and installation in Lakewood, CA. We service all major brands including LiftMaster, Chamberlain, and Genie.",
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
              Garage Door <span className="text-orange-500">Opener Repair in Lakewood</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Motor humming but the door won&apos;t move? Remote stopped working? Our certified Lakewood, CA technicians diagnose and fix all opener issues. We also install ultra-quiet, Wi-Fi-enabled smart openers from LiftMaster and Chamberlain.
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
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" 
                  alt="Garage Door Opener Repair" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Expert Local Opener Services</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>All Major Brands Supported:</strong> We carry parts to repair LiftMaster, Chamberlain, Genie, Craftsman, and Linear openers on the first visit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Smart Openers (myQ):</strong> Upgrade to a Wi-Fi enabled opener. Control your garage door from your smartphone and get Amazon Key in-garage delivery.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Ultra-Quiet Belt Drives:</strong> Tired of a noisy chain waking up the house? We install steel-reinforced belt drive openers perfect for garages under bedrooms.</span>
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
          <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">Troubleshooting Your Garage Door Opener</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Common Opener Problems We Fix in Lakewood</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                If your garage door isn&apos;t operating correctly, the issue often lies in one of these components:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Stripped Nylon Gears:</strong> If you hear the motor humming but the door doesn&apos;t move, the internal gear is likely stripped. We can rebuild the gear assembly.</li>
                <li><strong>Sensor Alignment (Photo-Eyes):</strong> If the door starts to close, flashes its lights, and immediately reverses, the safety sensors at the bottom of the tracks are misaligned or blocked.</li>
                <li><strong>Logic Board Failure:</strong> Power surges (common during California storms) or age can fry the main circuit board, causing erratic behavior or complete failure.</li>
                <li><strong>Remote/Keypad Issues:</strong> We reprogram remotes, replace batteries, and install new exterior wireless keypads.</li>
                <li><strong>Limit Switch Adjustment:</strong> If the door doesn&apos;t close all the way or reverses when it hits the floor, the travel limits need professional adjustment.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Types of Openers We Install</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Belt Drive Openers:</strong> Uses a steel-reinforced rubber belt. Extremely quiet and smooth. Ideal for Lakewood homes with living spaces above or adjacent to the garage.</li>
                <li><strong>Chain Drive Openers:</strong> The traditional, affordable option. Highly durable and capable of lifting heavy wooden doors, but can be noisy.</li>
                <li><strong>Wall-Mount (Jackshaft) Openers:</strong> Mounts on the wall beside the door rather than on the ceiling. Frees up overhead storage space and is very quiet. Great for high ceilings.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Should You Repair or Replace Your Opener?</h3>
              <p className="text-slate-300 leading-relaxed">
                If your opener is over 10-15 years old, lacks modern safety features (like photo-eyes), or requires a major repair (like a new logic board or motor), replacement is usually the most cost-effective choice. Newer models also offer enhanced security features like rolling codes to prevent hacking. We will always give you an honest assessment and upfront pricing for both options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
