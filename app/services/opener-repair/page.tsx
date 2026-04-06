import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Opener Repair & Installation | Lakewood Garage Door Repair Experts',
  description: 'Professional garage door opener repair and installation in Lakewood, CA. We service all major brands including LiftMaster, Chamberlain, and Genie.',
};

export default function OpenerRepairPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-orange-500/30">
      <section className="relative py-20 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Garage Door <span className="text-orange-500">Opener Repair & Install</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Is your garage door opener making strange noises, refusing to open, or completely dead? Our Lakewood, CA technicians can diagnose and fix any opener issue, or install a brand new, ultra-quiet smart opener.
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
                  src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800&auto=format&fit=crop" 
                  alt="Garage Door Opener Repair" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Expert Opener Services</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>All Major Brands:</strong> We repair and install LiftMaster, Chamberlain, Genie, Craftsman, and more.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Smart Openers:</strong> Upgrade to a Wi-Fi enabled opener and control your garage door from your smartphone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Quiet Operation:</strong> Tired of a noisy chain drive? Ask us about our ultra-quiet belt drive opener installations.</span>
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
          <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">Comprehensive Opener Solutions</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Common Opener Problems We Fix</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Garage door openers are complex machines with electrical and mechanical components. We frequently resolve issues such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Stripped Gears:</strong> If you hear the motor humming but the door doesn&apos;t move, the internal nylon gear is likely stripped.</li>
                <li><strong>Sensor Alignment:</strong> If the door starts to close and immediately reverses, the safety photo-eyes may be misaligned or dirty.</li>
                <li><strong>Logic Board Failure:</strong> Power surges or age can fry the main circuit board, causing erratic behavior or complete failure.</li>
                <li><strong>Remote/Keypad Issues:</strong> We can reprogram remotes, replace batteries, or install new keypads.</li>
                <li><strong>Limit Switch Adjustment:</strong> If the door doesn&apos;t close all the way or reverses when it hits the floor, the travel limits need adjustment.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Types of Openers We Install</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Chain Drive:</strong> The most common and affordable option. Highly durable, but can be noisy. Best for detached garages.</li>
                <li><strong>Belt Drive:</strong> Uses a steel-reinforced rubber belt instead of a chain. Extremely quiet and smooth. Ideal for garages located under or next to living spaces.</li>
                <li><strong>Wall-Mount (Jackshaft):</strong> Mounts on the wall beside the door rather than on the ceiling. Frees up overhead space and is very quiet. Great for high ceilings or oversized doors.</li>
                <li><strong>Smart Openers:</strong> Features built-in Wi-Fi (like Chamberlain&apos;s myQ technology), allowing you to monitor and control your garage door from your smartphone, receive alerts, and even allow secure Amazon package delivery.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Repair vs. Replace</h3>
              <p className="text-slate-300 leading-relaxed">
                Not sure whether to fix your old opener or buy a new one? If your opener is over 10-15 years old, lacks modern safety features (like photo-eyes), or requires a major repair (like a new logic board or motor), replacement is usually the most cost-effective choice. We will always give you an honest assessment and upfront pricing for both options so you can make an informed decision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
