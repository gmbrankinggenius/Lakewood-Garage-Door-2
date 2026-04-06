'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall, Clock, MapPin, ShieldCheck, ChevronDown } from 'lucide-react';

export function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-2 hidden sm:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400"><Clock className="w-4 h-4 text-orange-500" /> 24/7 Emergency Service</span>
            <span className="flex items-center gap-1 text-slate-400"><MapPin className="w-4 h-4 text-orange-500" /> Serving Lakewood, CA & Surrounding Areas</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400"><ShieldCheck className="w-4 h-4 text-orange-500" /> Licensed & Insured</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 relative">
            <div className="absolute -top-6 -left-2 w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 z-10">
              <Image 
                src="https://drive.google.com/uc?export=view&id=1JZsO-FqhGCVaE2HNW6CBQZjVAYGHYy1d" 
                alt="Lakewood Garage Door Repair Experts Logo" 
                fill 
                className="object-contain"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col hidden sm:flex ml-24 sm:ml-28">
              <span className="font-heading font-bold text-xl leading-none text-white tracking-tight">LAKEWOOD</span>
              <span className="text-[10px] font-bold text-orange-500 tracking-widest uppercase">Garage Door Experts</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            
            <div className="relative group">
              <Link href="/#services" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                Services <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 flex flex-col">
                  <Link href="/services/spring-replacement" className="px-4 py-2 hover:bg-slate-800 hover:text-orange-500 transition-colors">Spring Replacement</Link>
                  <Link href="/services/opener-repair" className="px-4 py-2 hover:bg-slate-800 hover:text-orange-500 transition-colors">Opener Repair & Install</Link>
                  <Link href="/services/cable-repair" className="px-4 py-2 hover:bg-slate-800 hover:text-orange-500 transition-colors">Cable Repair</Link>
                  <Link href="/services/off-track-doors" className="px-4 py-2 hover:bg-slate-800 hover:text-orange-500 transition-colors">Off-Track Doors</Link>
                  <Link href="/services/panel-replacement" className="px-4 py-2 hover:bg-slate-800 hover:text-orange-500 transition-colors">Panel Replacement</Link>
                  <Link href="/services/routine-maintenance" className="px-4 py-2 hover:bg-slate-800 hover:text-orange-500 transition-colors">Routine Maintenance</Link>
                </div>
              </div>
            </div>

            <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
            <Link href="/#reviews" className="hover:text-orange-500 transition-colors">Reviews</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:562-784-4156" className="hidden lg:flex items-center gap-2 font-heading font-bold text-lg text-white hover:text-orange-400 transition-colors">
              <PhoneCall className="w-5 h-5 text-orange-500" />
              (562) 784-4156
            </a>
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-md font-medium transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] flex items-center gap-2">
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
