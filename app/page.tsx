import { Metadata } from 'next';
import { PhoneCall, ShieldCheck, Clock, Wrench, ChevronRight, Star, CheckCircle2, MapPin, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { FAQSection } from '@/components/faq-section';
import { ServicesGrid } from '@/components/services-grid';
import { Testimonials } from '@/components/testimonials';
import { HeroForm } from '@/components/hero-form';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-orange-500/30">
      {/* Top Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-2 hidden sm:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400"><Clock className="w-4 h-4 text-orange-500" /> 24/7 Emergency Service</span>
            <span className="flex items-center gap-1 text-slate-400"><MapPin className="w-4 h-4 text-orange-500" /> Serving Lakewood & Surrounding Areas</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400"><ShieldCheck className="w-4 h-4 text-orange-500" /> Licensed & Insured</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
              <Image 
                src="/logo.jpg" 
                alt="Lakewood Garage Door Repair Experts Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-heading font-bold text-xl leading-none text-white tracking-tight">LAKEWOOD</span>
              <span className="text-[10px] font-bold text-orange-500 tracking-widest uppercase">Garage Door Experts</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-orange-500 transition-colors">Why Us</a>
            <a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a>
            <a href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:555-0123" className="hidden lg:flex items-center gap-2 font-heading font-bold text-lg text-white hover:text-orange-400 transition-colors">
              <PhoneCall className="w-5 h-5 text-orange-500" />
              (555) 123-4567
            </a>
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-md font-medium transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] flex items-center gap-2">
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/90 z-10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-orange-600/5 rounded-full blur-3xl"></div>
          {/* Hexagon pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSI0OSIgdmlld0JveD0iMCAwIDI4IDQ5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMy45OSAxMS4yTDE0IDEwLjE5bC0xMS45OS02LjlMMiA0LjI4djE0LjI0bDEyIDYuOTRsMTItNi45NFY0LjI4bC0uMDEtLjk5TDEzLjk5IDExLjJ6TTAgMjIuNTJsMTMuOTkgOC4wOEwyOCAyMi41MnYtMTguNkwxMy45OS00LjA4IDAgMy45MnYxOC42em0xMy45OSAxOS42TDE0IDQxLjExbC0xMS45OS02LjlMMiAzNS4ydjE0LjI0bDEyIDYuOTRsMTItNi45NFYzNS4ybC0uMDEtLjk5TDEzLjk5IDQyLjF6TTAgNTMuNDRsMTMuOTkgOC4wOEwyOCA1My40NHYtMTguNkwxMy45OSAyNi44NCAwIDM0Ljg0djE4LjZ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9zdmc+')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Lakewood&apos;s #1 Rated Garage Door Service
              </div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Fast, Reliable <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Garage Door Repair
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Broken spring? Door won&apos;t open? We provide 24/7 emergency repair, installation, and maintenance in Lakewood. Expert technicians at your door in 60 minutes or less.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="tel:555-0123" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  Call (555) 123-4567
                </a>
                <a href="#services" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-md font-medium text-lg transition-all flex items-center justify-center gap-2">
                  View Services <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" /> Same Day Service
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" /> Upfront Pricing
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" /> Lifetime Warranties
                </div>
              </div>
            </div>
            
            {/* Form Column */}
            <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 mt-12 lg:mt-0" id="contact">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Garage Door Services</h2>
            <p className="text-slate-400">From snapped cables to complete new installations, our certified technicians handle it all with precision and care.</p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-orange-500/5 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Why Lakewood Trusts Us With Their Homes</h2>
              <p className="text-slate-400 mb-8 text-lg">
                We don&apos;t just fix garage doors; we restore your peace of mind. Our team is built on transparency, speed, and unmatched technical expertise.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Rapid Response Time', desc: 'We know a broken door is a security risk. We dispatch technicians immediately.' },
                  { title: 'Fully Stocked Trucks', desc: 'We carry parts for all major brands to fix your issue on the first visit.' },
                  { title: 'No Hidden Fees', desc: 'You get a clear, written estimate before any work begins. No surprises.' },
                  { title: 'Highly Trained Techs', desc: 'Our team undergoes rigorous training and background checks.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-slate-800 relative">
                <Image 
                  src="https://picsum.photos/seed/garage/800/800" 
                  alt="Garage Door Repair Technician" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <span className="text-white font-bold">5.0/5.0</span>
                </div>
                <p className="text-sm text-slate-400">Based on 500+ local reviews from Lakewood residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Overview / SEO Optimized FAQ Section */}
      <section id="faq" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Everything you need to know about garage door repair in Lakewood.</p>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-slate-400">Real reviews from your neighbors in Lakewood.</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-600">
           <div className="absolute inset-0 opacity-[0.1] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSI0OSIgdmlld0JveD0iMCAwIDI4IDQ5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMy45OSAxMS4yTDE0IDEwLjE5bC0xMS45OS02LjlMMiA0LjI4djE0LjI0bDEyIDYuOTRsMTItNi45NFY0LjI4bC0uMDEtLjk5TDEzLjk5IDExLjJ6TTAgMjIuNTJsMTMuOTkgOC4wOEwyOCAyMi41MnYtMTguNkwxMy45OS00LjA4IDAgMy45MnYxOC42em0xMy45OSAxOS42TDE0IDQxLjExbC0xMS45OS02LjlMMiAzNS4ydjE0LjI0bDEyIDYuOTRsMTItNi45NFYzNS4ybC0uMDEtLjk5TDEzLjk5IDQyLjF6TTAgNTMuNDRsMTMuOTkgOC4wOEwyOCA1My40NHYtMTguNkwxMy45OSAyNi44NCAwIDM0Ljg0djE4LjZ6IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9zdmc+')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">Need Your Garage Door Fixed Today?</h2>
          <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">Don&apos;t let a broken garage door ruin your day. Our Lakewood experts are ready to help right now.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:555-0123" className="w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5 text-orange-500" />
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image 
                    src="/logo.jpg" 
                    alt="Lakewood Garage Door Repair Experts Logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <span className="font-heading font-bold text-xl text-white tracking-tight">LAKEWOOD</span>
              </div>
              <p className="text-slate-400 mb-6">
                Lakewood&apos;s premier garage door repair and installation service. Available 24/7 for all your emergency needs.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholder */}
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-orange-500 transition-colors cursor-pointer">
                  <span className="text-slate-400 hover:text-orange-500">FB</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-orange-500 transition-colors cursor-pointer">
                  <span className="text-slate-400 hover:text-orange-500">IG</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Garage Door Repair</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Spring Replacement</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Opener Installation</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Cable Repair</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Panel Replacement</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Maintenance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Service Areas</h4>
              <ul className="space-y-3 text-slate-400">
                <li>Lakewood</li>
                <li>Denver</li>
                <li>Golden</li>
                <li>Wheat Ridge</li>
                <li>Arvada</li>
                <li>Littleton</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>1234 Repair Way, Suite 100<br/>Lakewood, CO 80215</span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <a href="tel:555-0123" className="hover:text-orange-500">(555) 123-4567</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <a href="mailto:service@lakewoodgaragedoors.com" className="hover:text-orange-500">service@lakewoodgaragedoors.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Open 24/7 for Emergencies</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Lakewood Garage Door Repair Experts. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
