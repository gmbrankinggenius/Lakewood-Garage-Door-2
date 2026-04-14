import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Off-Track Garage Door Repair in Lakewood, CA | Emergency Service',
  description: 'Is your garage door crooked or off its tracks? Do not force it! Call our Lakewood, CA experts for safe, 24/7 emergency realignment and track repair.',
  keywords: ['off track garage door Lakewood', 'garage door derailment', 'fix crooked garage door', 'Lakewood CA garage door tracks', 'garage door roller replacement'],
};

export default function OffTrackDoorsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Off-Track Garage Door Realignment",
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
    "description": "Emergency garage door realignment and track repair in Lakewood, CA. We safely fix crooked, jammed, or derailed garage doors.",
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
              <span className="text-orange-500">Off-Track</span> Garage Door Repair in Lakewood
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Is your garage door crooked, jammed, or hanging dangerously off its tracks? Do not attempt to force it closed. Our Lakewood, CA technicians provide 24/7 emergency realignment to safely secure your door and fix the underlying issue.
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
                  src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=800&auto=format&fit=crop" 
                  alt="Off-Track Garage Door Repair" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Professional Lakewood Realignment Services</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Do Not Force It:</strong> Trying to move a derailed door can cause the heavy panels to collapse. Leave it to our local professionals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Identify the Root Cause:</strong> We don&apos;t just pop it back on track. We diagnose why it derailed (e.g., snapped cable, bent track, worn rollers) to prevent it from happening again.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Roller & Track Repair:</strong> We straighten bent steel tracks, tighten loose hardware, and replace cheap plastic rollers with smooth, quiet nylon rollers.</span>
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
          <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">Why Do Garage Doors Go Off-Track?</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Common Causes of Derailment in Lakewood</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                A garage door doesn&apos;t just fall off its tracks for no reason. It is usually the result of a mechanical failure or physical impact:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Broken Lifting Cables:</strong> The most common cause. If a cable snaps, the weight shifts entirely to one side, violently pulling the door off the track.</li>
                <li><strong>Vehicle Impact Damage:</strong> Accidentally backing your car into the door can bend the vertical tracks or break the hinges, causing immediate derailment.</li>
                <li><strong>Worn or Broken Rollers:</strong> Rollers guide the door along the tracks. If old steel or plastic rollers wear out or pop out of their hinges, the door will derail.</li>
                <li><strong>Misaligned or Loose Tracks:</strong> If the bolts holding the tracks to your garage wall vibrate loose over time, the rollers won&apos;t have a straight path to follow.</li>
                <li><strong>Obstructions:</strong> Something blocking the path of the door (like a trash can or tool) can force the door off-track as the opener continues to push downward.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">What to Do If Your Door is Off-Track</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                An off-track door is extremely dangerous. It can fall completely, causing severe injury or property damage. Follow these safety steps:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Stop Using the Opener:</strong> Disconnect the opener by pulling the red emergency release cord so no one accidentally tries to operate it.</li>
                <li><strong>Do NOT Try to Fix It Yourself:</strong> Trying to pry the heavy panels back onto the tracks can cause them to snap back or fall on you. The springs are still under immense tension.</li>
                <li><strong>Keep Clear:</strong> Keep children and pets away from the garage until the door is secured.</li>
                <li><strong>Call a Local Professional:</strong> Contact our Lakewood emergency repair team immediately. We have the heavy-duty tools to safely secure the door and realign it.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Our Professional Realignment Process</h3>
              <p className="text-slate-300 leading-relaxed">
                When we arrive, our first priority is securing the heavy door to prevent it from collapsing. We then disconnect the opener and manually inspect the tracks, rollers, cables, and springs. We will replace any damaged parts, straighten and clean the tracks, and carefully guide the door back into place. Finally, we balance the door and test the entire system to ensure it operates smoothly and safely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
