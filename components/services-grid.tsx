'use client';

import { Wrench, Settings, ShieldAlert, RefreshCw, Zap, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Spring Replacement',
    description: 'Expert torsion and extension spring replacement in Lakewood. We use premium high-cycle springs (up to 20,000 cycles) for maximum durability and safety, ensuring your heavy garage door is perfectly balanced.',
    icon: RefreshCw,
    link: '/services/spring-replacement',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Opener Repair & Install',
    description: 'Comprehensive repair for unresponsive motors, stripped gears, and sensor issues. We also install modern, ultra-quiet belt-drive and smart Wi-Fi enabled garage door openers from top brands like LiftMaster and Chamberlain.',
    icon: Zap,
    link: '/services/opener-repair',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Cable Repair',
    description: 'Snapped, frayed, or loose cables are a major safety hazard. Our certified technicians safely replace damaged cables with aircraft-grade steel cables to restore proper tension and prevent the door from falling.',
    icon: Wrench,
    link: '/services/cable-repair',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Off-Track Doors',
    description: 'If your garage door is crooked or has come off its tracks, do not force it. We provide emergency realignment, track straightening, and roller replacement to secure your door and prevent further structural damage.',
    icon: ShieldAlert,
    link: '/services/off-track-doors',
    image: 'https://images.unsplash.com/photo-1622473590773-f588134b6ce7?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Panel Replacement',
    description: 'Fix dented, cracked, or weather-damaged garage door panels without replacing the entire door. We offer cost-effective section replacements with precise color and style matching for seamless curb appeal.',
    icon: Home,
    link: '/services/panel-replacement',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Routine Maintenance',
    description: 'Preventative tune-ups, professional lubrication, and comprehensive 25-point safety inspections. Regular maintenance extends the lifespan of your garage door system and prevents costly unexpected breakdowns.',
    icon: Settings,
    link: '/services/routine-maintenance',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop'
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
