import { Wrench, Settings, ShieldAlert, RefreshCw, Zap, Home } from 'lucide-react';

const services = [
  {
    title: 'Spring Replacement',
    description: 'Torsion and extension springs replaced safely and quickly. We use high-cycle springs for maximum durability.',
    icon: RefreshCw,
  },
  {
    title: 'Opener Repair & Install',
    description: 'Fixing unresponsive motors, chain/belt issues, and installing smart, quiet garage door openers.',
    icon: Zap,
  },
  {
    title: 'Cable Repair',
    description: 'Snapped or frayed cables are dangerous. Our techs safely replace them to restore balance to your door.',
    icon: Wrench,
  },
  {
    title: 'Off-Track Doors',
    description: 'If your door has come off its tracks, do not force it. We realign and secure it to prevent further damage.',
    icon: ShieldAlert,
  },
  {
    title: 'Panel Replacement',
    description: 'Damaged a panel? We can often replace individual sections without needing a whole new door.',
    icon: Home,
  },
  {
    title: 'Routine Maintenance',
    description: 'Preventative tune-ups, lubrication, and safety inspections to keep your door running smoothly year-round.',
    icon: Settings,
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
            className="group relative bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Icon className="w-24 h-24 text-orange-500" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-colors">
                <Icon className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors">
                Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
