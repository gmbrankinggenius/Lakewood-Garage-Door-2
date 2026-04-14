import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Garage Door Tune-Up & Maintenance in Lakewood, CA',
  description: 'Prevent costly repairs with our 25-point garage door tune-up and maintenance service in Lakewood, CA. Lubrication, safety checks, and tension adjustments.',
  keywords: ['garage door maintenance Lakewood', 'garage door tune up', 'lubricate garage door', 'Lakewood CA garage door inspection', 'garage door safety check'],
};

export default function RoutineMaintenancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Garage Door Routine Maintenance & Tune-Up",
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
    "description": "Comprehensive 25-point garage door tune-up and maintenance service in Lakewood, CA. We lubricate, inspect, and adjust your door for optimal performance.",
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
              Garage Door <span className="text-orange-500">Tune-Up & Maintenance in Lakewood</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Is your garage door squeaking, grinding, or moving slowly? An ounce of prevention is worth a pound of cure. Our comprehensive 25-point tune-up service in Lakewood, CA keeps your garage door operating safely and quietly year-round.
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
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Comprehensive Local Tune-Up Service</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Professional Lubrication:</strong> We use specialized, weather-resistant garage door lubricants on all moving parts (rollers, hinges, and springs) to eliminate grinding noises and reduce friction.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>25-Point Safety Inspection:</strong> We perform a rigorous safety check, testing the auto-reverse mechanism, photo-eye sensors, and lifting cables to ensure your family&apos;s safety.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Precision Adjustments:</strong> We tighten loose hardware, adjust track alignment, and fine-tune spring tension so your opener motor doesn&apos;t have to overwork.</span>
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
          <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">The Value of Preventative Garage Door Maintenance</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Why Annual Maintenance Matters for Lakewood Homes</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Your garage door is likely the largest moving part of your home, often used multiple times a day as the primary front door. Just like a car, it requires regular tune-ups to function properly. Annual maintenance provides several key benefits:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Prevents Costly Breakdowns:</strong> Catching a fraying cable or a wearing gear early costs significantly less than an emergency repair when the door gets stuck on a weekend.</li>
                <li><strong>Extends Lifespan:</strong> Proper lubrication and tension adjustments reduce strain on the opener motor and the springs, helping them last years longer.</li>
                <li><strong>Ensures Safety:</strong> We test the auto-reverse sensors and force settings to ensure the door won&apos;t crush objects, pets, or people in its path.</li>
                <li><strong>Reduces Noise:</strong> A well-lubricated and aligned door operates much more quietly, which is especially important if you have living spaces above or adjacent to the garage.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">What is Included in a Garage Door Tune-Up?</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Our comprehensive tune-up leaves no stone unturned. Our local technicians will perform a rigorous 25-point inspection, which includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Checking spring tension and balancing the door weight.</li>
                <li>Inspecting lifting cables for wear, rust, and fraying.</li>
                <li>Examining rollers, hinges, and bearings for damage.</li>
                <li>Tightening all nuts, bolts, and lag screws that vibrate loose over time.</li>
                <li>Lubricating all moving parts with high-quality, non-stick garage door spray.</li>
                <li>Testing the photo-eye sensors and auto-reverse safety features.</li>
                <li>Checking the weatherstripping and bottom seal for pest/water intrusion.</li>
                <li>Inspecting the opener motor, internal gears, and drive mechanism (chain/belt).</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">DIY Maintenance Tips Between Visits</h3>
              <p className="text-slate-300 leading-relaxed">
                While professional maintenance is recommended annually, there are things you can do between visits. Keep the tracks clean and free of debris (do <strong>NOT</strong> lubricate the tracks themselves, as this attracts dirt and gums up the rollers). You can also test the balance of your door by pulling the red emergency release cord and lifting the door halfway; it should stay in place. If it falls or flies up, call us for a professional spring adjustment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
