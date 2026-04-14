'use client';

import { Wrench, Settings, ShieldAlert, RefreshCw, Zap, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Broken Spring Replacement',
    description: 'Snapped spring? We provide same-day torsion and extension spring repair across Lakewood, CA. We install heavy-duty, high-cycle springs (rated for 20,000+ cycles) to safely balance your door and prevent future emergencies.',
    icon: RefreshCw,
    link: '/services/spring-replacement',
    image: 'https://picsum.photos/seed/garage-spring/800/600'
  },
  {
    title: 'Opener Repair & Installation',
    description: 'Motor humming but not moving? Our certified Lakewood technicians fix stripped gears, sensor alignments, and logic boards. We also install ultra-quiet, Wi-Fi-enabled LiftMaster and Chamberlain smart openers.',
    icon: Zap,
    link: '/services/opener-repair',
    image: 'https://picsum.photos/seed/garage-opener/800/600'
  },
  {
    title: 'Emergency Cable Repair',
    description: 'Frayed or snapped garage door cables are a severe safety hazard. We rapidly dispatch local experts to replace broken cables with aircraft-grade steel, restoring proper tension and keeping your Lakewood home secure.',
    icon: Wrench,
    link: '/services/cable-repair',
    image: 'https://picsum.photos/seed/steel-cable/800/600'
  },
  {
    title: 'Off-Track Door Realignment',
    description: 'A crooked or jammed garage door requires immediate professional attention. We offer 24/7 emergency track straightening, roller replacement, and structural realignment for residential garage doors throughout the Lakewood area.',
    icon: ShieldAlert,
    link: '/services/off-track-doors',
    image: 'https://picsum.photos/seed/garage-track/800/600'
  },
  {
    title: 'Panel & Section Replacement',
    description: 'Fix dented, cracked, or crashed garage door panels without the cost of a full replacement. We source exact-match sections from major manufacturers to seamlessly restore your home\'s curb appeal and structural integrity.',
    icon: Home,
    link: '/services/panel-replacement',
    image: 'https://picsum.photos/seed/garage-panel/800/600'
  },
  {
    title: 'Annual Tune-Up & Maintenance',
    description: 'Prevent costly breakdowns with our comprehensive 25-point safety inspection. Our local service includes professional track lubrication, spring tension adjustment, and sensor testing to ensure your door operates smoothly year-round.',
    icon: Settings,
    link: '/services/routine-maintenance',
    image: 'https://picsum.photos/seed/maintenance/800/600'
  },
];

export function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div 
            key={index} 
            className="group relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:-translate-y-1 flex flex-col"
          >
            <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            </div>
            <div className="p-8 pt-0 relative z-10 flex-grow flex flex-col">
              <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-colors -mt-7 relative z-20 shadow-lg">
                <Icon className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <Link href={service.link} className="inline-flex items-center text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors mt-auto">
                Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
