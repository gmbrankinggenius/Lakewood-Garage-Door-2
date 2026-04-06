import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Spring Replacement | Lakewood Garage Door Repair Experts',
  description: 'Expert garage door spring replacement in Lakewood, CA. Fast, safe, and reliable service for broken torsion and extension springs.',
};

export default function SpringReplacementPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-orange-500/30">
      <section className="relative py-20 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Garage Door <span className="text-orange-500">Spring Replacement</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Broken spring? Don&apos;t try to fix it yourself. Our expert technicians in Lakewood, CA can safely and quickly replace your torsion or extension springs.
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
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Why Choose Us for Spring Repair?</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Safety First:</strong> Garage door springs are under extreme tension and can cause serious injury if mishandled. We have the right tools and training.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>High-Cycle Springs:</strong> We use premium, high-cycle springs designed to last longer than standard builder-grade springs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Same-Day Service:</strong> A broken spring means your car is trapped. We offer fast, same-day service in Lakewood, CA.</span>
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
          <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">Understanding Garage Door Springs</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Torsion vs. Extension Springs</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Most residential garage doors use one of two types of spring systems:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Torsion Springs:</strong> Located horizontally above the door opening. These are the most common and generally safer because if they break, they remain on the shaft. They provide a smoother operation and last longer.</li>
                <li><strong>Extension Springs:</strong> Located on either side of the door, stretching along the horizontal tracks. When these break, they can fly off dangerously if safety cables aren&apos;t installed.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Signs Your Spring is Broken</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>You heard a loud &quot;bang&quot; from the garage (sounds like a gunshot or firecracker).</li>
                <li>The garage door opens a few inches and stops.</li>
                <li>The door feels incredibly heavy to lift manually.</li>
                <li>You can see a visible gap (usually about 2 inches) in the spring above the door.</li>
                <li>The door falls rapidly when closing instead of a controlled descent.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Why You Shouldn&apos;t DIY Spring Repair</h3>
              <p className="text-slate-300 leading-relaxed">
                Garage door springs hold the entire weight of the door (often 150-300 lbs) under immense tension. Attempting to adjust or replace them without the proper winding bars, training, and safety equipment can result in severe injury, property damage, or even death. Our technicians are fully trained and insured to handle this dangerous task safely and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
