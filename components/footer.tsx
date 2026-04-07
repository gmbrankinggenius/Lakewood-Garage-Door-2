'use client';

import Link from 'next/link';
import { PhoneCall, MapPin, Mail } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image 
                  src="https://drive.google.com/uc?export=view&id=1JZsO-FqhGCVaE2HNW6CBQZjVAYGHYy1d" 
                  alt="Lakewood Garage Door Repair Experts Logo" 
                  fill 
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-none text-white tracking-tight">LAKEWOOD</span>
                <span className="text-[9px] font-bold text-orange-500 tracking-widest uppercase">Garage Door Experts</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Lakewood&apos;s premier garage door repair and installation service. Available 24/7 for all your emergency needs.
            </p>
            <div className="flex items-center gap-4">
              {/* Social icons could go here */}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-orange-500 transition-colors">Our Services</Link></li>
              <li><Link href="/#reviews" className="hover:text-orange-500 transition-colors">Customer Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/services/spring-replacement" className="hover:text-orange-500 transition-colors">Spring Replacement</Link></li>
              <li><Link href="/services/opener-repair" className="hover:text-orange-500 transition-colors">Opener Repair & Install</Link></li>
              <li><Link href="/services/cable-repair" className="hover:text-orange-500 transition-colors">Cable Repair</Link></li>
              <li><Link href="/services/off-track-doors" className="hover:text-orange-500 transition-colors">Off-Track Doors</Link></li>
              <li><Link href="/services/panel-replacement" className="hover:text-orange-500 transition-colors">Panel Replacement</Link></li>
              <li><Link href="/services/routine-maintenance" className="hover:text-orange-500 transition-colors">Routine Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>1234 Repair Way, Suite 100<br/>Lakewood, CA 90712</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:562-784-4156" className="hover:text-orange-500 text-lg font-bold text-white">(562) 784-4156</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:lakewoodgaragedoorrepairexpert@gmail.com" className="hover:text-orange-500">lakewoodgaragedoorrepairexpert@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Embed */}
        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-800 mb-12 relative grayscale-[0.5] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83948.32927153866!2d-118.11334605!3d33.84456145000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d837cd484ba4dd7%3A0x1d65f9db25722585!2sLakewood%20Garage%20Door%20Repair%20Experts!5e1!3m2!1sen!2sus!4v1775489266828!5m2!1sen!2sus" 
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Lakewood Garage Door Repair Experts. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
