import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Garage Door Panel Replacement in Lakewood, CA',
  description: 'Dented or crashed garage door? We replace damaged garage door panels and sections in Lakewood, CA. Exact color matching from major brands. Call for a quote!',
  keywords: ['garage door panel replacement Lakewood', 'fix dented garage door', 'garage door section repair', 'Lakewood CA garage door panels', 'replace bottom garage door panel'],
};

export default function PanelReplacementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Garage Door Panel & Section Replacement",
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
    "description": "Cost-effective garage door panel replacement in Lakewood, CA. We fix dented and crashed doors with exact-match sections.",
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
              Garage Door <span className="text-orange-500">Panel Replacement in Lakewood</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Did you accidentally back into your garage door? Has weather warped the wood? We replace individual dented or crashed panels without the cost of a completely new door for homeowners across Lakewood, CA.
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
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop" 
                  alt="Garage Door Panel Replacement" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Cost-Effective Local Panel Repair</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Save Money:</strong> If only the bottom one or two panels are damaged, replacing just those sections is significantly more affordable than buying a whole new door.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Exact Color & Style Matching:</strong> We source replacement sections directly from major manufacturers (Amarr, Clopay, Wayne Dalton) to match your existing door perfectly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Restore Structural Integrity:</strong> Even a small dent can compromise how the door rolls in the tracks. We ensure your door is structurally sound and balanced after replacement.</span>
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
          <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">Panel Replacement vs. Full Door Replacement</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">When Can a Garage Door Panel Be Replaced?</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Replacing a single panel is a great way to save money, but it&apos;s not always the right solution. Panel replacement is ideal for Lakewood homeowners when:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Only one or two panels are damaged (usually the bottom section from minor vehicle impacts).</li>
                <li>The rest of the door is in good condition and relatively new (under 10 years old).</li>
                <li>The manufacturer still produces that specific model, stamp design, and color.</li>
                <li>The structural integrity of the track and spring system wasn&apos;t compromised by the impact.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">When Should You Replace the Whole Door?</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Sometimes, trying to save money with a panel replacement ends up costing more in the long run. You should consider a full door replacement if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Three or more panels are damaged. The cost of multiple panels and labor often equals or exceeds a brand new door.</li>
                <li>The door is older than 10-15 years. Finding an exact match is difficult, and the new panel will look noticeably different due to UV fading on the old panels.</li>
                <li>The door has severe rust, wood rot, or widespread structural issues.</li>
                <li>You want to upgrade your home&apos;s curb appeal or improve energy efficiency with a modern, insulated door.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">How We Replace Garage Door Sections</h3>
              <p className="text-slate-300 leading-relaxed">
                To replace a panel, we first need the exact make, model, size, and color of your current door (usually found on a sticker on the inside of the door). Once the new panel arrives, our local technicians will safely secure the door, remove the damaged section, and install the new one. We then reconnect the hinges, ensure the weatherstripping is tight, and test the door&apos;s balance to ensure the new panel hasn&apos;t affected the lifting mechanism.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
