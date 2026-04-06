import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Off-Track Doors | Lakewood Garage Door Repair Experts',
  description: 'Is your garage door off its tracks? Do not force it! Call our Lakewood, CA experts for safe and fast realignment and repair.',
};

export default function OffTrackDoorsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-orange-500/30">
      <section className="relative py-20 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-orange-500">Off-Track</span> Garage Doors
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              An off-track garage door is not just an inconvenience; it&apos;s a major safety hazard. Our Lakewood, CA technicians can safely realign your door and fix the underlying cause.
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
                  src="https://images.unsplash.com/photo-1622473590773-f588134b6ce7?q=80&w=800&auto=format&fit=crop" 
                  alt="Off-Track Garage Door Repair" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Professional Realignment</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Do Not Force It:</strong> Trying to move an off-track door can cause severe damage or injury. Leave it to the professionals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Identify the Cause:</strong> We don&apos;t just put it back on track; we find out why it came off (e.g., broken cable, bent track, worn rollers) and fix it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-300"><strong>Roller & Track Repair:</strong> We can straighten bent tracks and replace damaged rollers to ensure smooth operation.</span>
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
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Common Causes of Derailment</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                A garage door doesn&apos;t just fall off its tracks for no reason. It&apos;s usually the result of an underlying issue that needs to be addressed:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Broken Cables:</strong> The most common cause. If a lifting cable snaps, the weight shifts unevenly, pulling the door off the track on one side.</li>
                <li><strong>Impact Damage:</strong> Accidentally backing your car into the door can bend the tracks or break the rollers, causing immediate derailment.</li>
                <li><strong>Worn or Broken Rollers:</strong> Rollers guide the door along the tracks. If they wear out, break, or pop out of their hinges, the door will derail.</li>
                <li><strong>Misaligned Tracks:</strong> If the tracks become loose from the wall or get bent, the rollers won&apos;t have a smooth path to follow.</li>
                <li><strong>Obstructions:</strong> Something blocking the path of the door (like a broom handle or trash can) can force the door off-track as the opener continues to push.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">What to Do If Your Door is Off-Track</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                An off-track door is extremely dangerous. It can fall completely, causing severe injury or property damage. Follow these steps:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Stop Using the Door:</strong> Disconnect the opener by pulling the red emergency release cord so no one accidentally tries to open it.</li>
                <li><strong>Do NOT Try to Fix It Yourself:</strong> Trying to pry the door back onto the tracks can cause it to snap back or fall on you. The springs are still under immense tension.</li>
                <li><strong>Keep Clear:</strong> Keep children and pets away from the garage until the door is secured.</li>
                <li><strong>Call a Professional:</strong> Contact our emergency repair team immediately. We have the tools to safely secure the door, realign it, and fix the root cause.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Our Realignment Process</h3>
              <p className="text-slate-300 leading-relaxed">
                When we arrive, our first priority is securing the heavy door to prevent it from falling. We then disconnect the opener and manually inspect the tracks, rollers, cables, and springs. We will replace any damaged parts, straighten and clean the tracks, and carefully guide the door back into place. Finally, we balance the door and test the entire system to ensure it operates smoothly and safely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
