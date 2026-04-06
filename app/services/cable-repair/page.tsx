import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cable Repair | Lakewood Garage Door Repair Experts',
  description: 'Fast and safe garage door cable repair in Lakewood, CA. Don\'t risk injury with snapped cables, call our experts for immediate service.',
};

export default function CableRepairPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-orange-500/30">
      <section className="relative py-20 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Garage Door <span className="text-orange-500">Cable Repair</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Snapped or frayed garage door cables are extremely dangerous. Our Lakewood, CA technicians have the expertise to safely replace your cables and restore balance to your door.
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
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Safe & Reliable Cable Replacement</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Emergency Service:</strong> A broken cable can leave your door stuck open or closed. We offer 24/7 emergency repair.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Heavy-Duty Cables:</strong> We replace old, worn cables with high-strength, aircraft-grade steel cables for maximum safety.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Full System Inspection:</strong> When cables break, it often affects other parts. We inspect the entire system to ensure everything is aligned.</span>
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
          <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">The Importance of Garage Door Cables</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">What Do Garage Door Cables Do?</h3>
              <p className="text-slate-300 leading-relaxed">
                Garage door cables work in tandem with the springs to safely lift and lower the heavy door. While the springs provide the tension and lifting power, the cables are the physical connection that pulls the door up. If a spring breaks, safety cables (on extension spring systems) prevent the spring from flying across the garage. If a lifting cable snaps, the door will become unbalanced, crooked, or completely stuck.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Signs of Cable Wear and Tear</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Catching cable issues early can prevent a catastrophic failure. Look out for these warning signs:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Fraying:</strong> If you see individual wire strands breaking or fraying, the cable is nearing the end of its life.</li>
                <li><strong>Rust and Corrosion:</strong> Rust weakens the steel, making it brittle and prone to snapping.</li>
                <li><strong>Slack or Loose Cables:</strong> If the cables are hanging loosely when the door is open, the tension is incorrect.</li>
                <li><strong>Uneven Door:</strong> If one side of the door sits higher than the other, a cable may have stretched or slipped off the drum.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Our Cable Replacement Process</h3>
              <p className="text-slate-300 leading-relaxed">
                When we replace your cables, we don&apos;t just swap the wire. We inspect the entire lifting system. We check the bottom brackets for rust, ensure the cable drums are in good condition, and verify the spring tension is perfectly balanced. We always replace cables in pairs to ensure even lifting and prevent the older cable from snapping shortly after the repair.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
