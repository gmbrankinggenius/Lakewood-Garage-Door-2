import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Routine Maintenance | Lakewood Garage Door Repair Experts',
  description: 'Preventative garage door maintenance in Lakewood, CA. Keep your door running smoothly and avoid costly repairs with our tune-up service.',
};

export default function RoutineMaintenancePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-orange-500/30">
      <section className="relative py-20 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Garage Door <span className="text-orange-500">Routine Maintenance</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              An ounce of prevention is worth a pound of cure. Our comprehensive tune-up service in Lakewood, CA keeps your garage door operating safely and quietly year-round.
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
                  src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop" 
                  alt="Garage Door Maintenance" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Comprehensive Tune-Up Service</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Lubrication:</strong> We lubricate all moving parts, including rollers, hinges, and springs, to reduce friction and noise.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Safety Inspection:</strong> We perform a thorough safety check, testing the auto-reverse mechanism and photo-eye sensors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Adjustments:</strong> We tighten loose hardware and adjust spring tension and track alignment for optimal performance.</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:562-784-4156" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-bold transition-all flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5" /> Call (562) 784-4156
                </a>
                <Link href="/#contact" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center justify-center gap-2">
                  Schedule a Tune-Up <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">The Value of Preventative Maintenance</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Why Annual Maintenance Matters</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Your garage door is likely the largest moving part of your home, often used multiple times a day. Just like a car, it requires regular tune-ups to function properly. Annual maintenance provides several key benefits:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Prevents Costly Breakdowns:</strong> Catching a fraying cable or a wearing gear early costs significantly less than an emergency repair when the door gets stuck.</li>
                <li><strong>Extends Lifespan:</strong> Proper lubrication and tension adjustments reduce strain on the opener motor and the springs, helping them last years longer.</li>
                <li><strong>Ensures Safety:</strong> We test the auto-reverse sensors and force settings to ensure the door won&apos;t crush objects, pets, or people in its path.</li>
                <li><strong>Reduces Noise:</strong> A well-lubricated and aligned door operates much more quietly, which is especially important if you have living spaces above or adjacent to the garage.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Our 25-Point Inspection Checklist</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Our comprehensive tune-up leaves no stone unturned. Our technicians will perform a rigorous 25-point inspection, which includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Checking spring tension and balancing the door.</li>
                <li>Inspecting lifting cables for wear and fraying.</li>
                <li>Examining rollers, hinges, and bearings for damage.</li>
                <li>Tightening all nuts, bolts, and lag screws.</li>
                <li>Lubricating all moving parts with high-quality garage door spray.</li>
                <li>Testing the photo-eye sensors and auto-reverse safety features.</li>
                <li>Checking the weatherstripping and bottom seal.</li>
                <li>Inspecting the opener motor, gears, and drive mechanism (chain/belt).</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">DIY Maintenance Tips</h3>
              <p className="text-slate-300 leading-relaxed">
                While professional maintenance is recommended annually, there are things you can do between visits. Keep the tracks clean and free of debris (do NOT lubricate the tracks themselves, as this attracts dirt). You can also test the balance of your door by pulling the emergency release and lifting the door halfway; it should stay in place. If it falls or flies up, call us for a spring adjustment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
