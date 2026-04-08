import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Star, ShieldCheck, Clock, CheckCircle2, ArrowRight, Trophy, Wrench, Zap, PhoneCall } from 'lucide-react';
import { HeroForm } from '@/components/hero-form';

const locations: Record<string, { title: string, zip: string, areaDesc: string, rankingText: string, landmarks: string[] }> = {
  'lakewood-ca': {
    title: 'Lakewood, CA',
    zip: 'Lakewood, CA',
    areaDesc: 'Known as "Tomorrow\'s City, Today," Lakewood is a beautiful community with thousands of residential homes relying on functional garage doors. From the tree-lined streets near Mayfair Park to the bustling neighborhoods around Lakewood Center, we provide comprehensive garage door solutions tailored to local architecture.',
    rankingText: 'We consistently rank as the #1 garage door repair service in Lakewood due to our sub-60-minute response times, transparent upfront pricing, and lifetime warranties on premium parts. Our commitment to the community has earned us hundreds of 5-star reviews across local directories.',
    landmarks: ['Lakewood Center', 'Mayfair Park', 'Del Valle Park']
  },
  'lakewood-ca-90711': {
    title: 'Lakewood, CA 90711',
    zip: '90711',
    areaDesc: 'Serving the central Lakewood area and 90711 residents, we understand the specific architectural styles and garage door systems common in this district. Whether you need a quick spring replacement or a full door installation, our local dispatch is always ready.',
    rankingText: 'Our dedicated dispatch for the 90711 area ensures we maintain our top-rated local ranking. We have over 150 five-star reviews specifically from this central Lakewood zone, making us the most trusted choice for emergency repairs.',
    landmarks: ['Central Lakewood', 'Lakewood Civic Center', 'Local Post Office Area']
  },
  'lakewood-ca-90712': {
    title: 'Lakewood, CA 90712',
    zip: '90712',
    areaDesc: 'Home to the Lakewood Center mall and dense residential neighborhoods, 90712 is one of our most frequently serviced zip codes. We handle everything from broken torsion springs to complete custom door installations for homes in this vibrant area.',
    rankingText: 'We are the highest-rated garage door repair company in 90712. Our local technicians are stationed nearby, allowing us to offer unmatched emergency response times for homeowners near Clark Ave and Del Amo Blvd. Search engines and locals alike rank us #1 for reliability.',
    landmarks: ['Lakewood Center Mall', 'San Martin Park', 'Lakewood Country Club']
  },
  'lakewood-ca-90713': {
    title: 'Lakewood, CA 90713',
    zip: '90713',
    areaDesc: 'The eastern side of Lakewood, encompassing the 90713 zip code, features beautiful family homes that require reliable, secure garage doors. We frequently upgrade older systems to modern, Wi-Fi-enabled smart openers in this family-friendly neighborhood.',
    rankingText: 'Recognized as the premier garage door experts in 90713, our top ranking is driven by our commitment to safety and our deep understanding of the specific wear-and-tear caused by the local climate. We are the top-recommended service on local community boards.',
    landmarks: ['Bloomfield Park', 'Palms Park', 'Artesia Blvd Corridor']
  },
  'lakewood-ca-90714': {
    title: 'Lakewood, CA 90714',
    zip: '90714',
    areaDesc: 'Providing dedicated service to the 90714 area of Lakewood, our certified technicians are equipped to handle any garage door emergency, ensuring your property remains secure and accessible at all hours.',
    rankingText: 'Our top local ranking in the 90714 area comes from our zero-hidden-fee policy and our ability to fix 95% of garage door issues on the very first visit. Our fully stocked trucks mean you never have to wait days for a repair.',
    landmarks: ['Lakewood Post Office Area', 'Bellflower Blvd Commercial Zone', 'Central Residential District']
  },
  'lakewood-ca-90715': {
    title: 'Lakewood, CA 90715',
    zip: '90715',
    areaDesc: 'Serving the northern and western edges of Lakewood in 90715, we provide rapid, reliable garage door repairs. Whether you live near the border of Long Beach or Bellflower, our trucks are fully stocked and ready to secure your home.',
    rankingText: 'We proudly hold the top spot for garage door services in 90715. Homeowners consistently rate us 5 stars for our professionalism, high-cycle spring replacements, and ultra-quiet opener installations. We are the definitive local authority on garage door safety.',
    landmarks: ['Rynerson Park', 'San Gabriel River Trail', 'West Lakewood Neighborhoods']
  }
};

export function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = locations[params.slug];
  if (!data) return { title: 'Not Found' };

  return {
    title: `Top-Rated Garage Door Repair in ${data.title} | 24/7 Service`,
    description: `Looking for the best garage door repair in ${data.title}? We are the #1 ranked local experts offering 24/7 emergency service, spring replacement, and more.`,
    keywords: [`Garage door repair ${data.title}`, `${data.zip} garage door service`, `fix garage door ${data.title}`, `emergency garage door repair ${data.zip}`],
  };
}

export default function ServiceAreaPage({ params }: { params: { slug: string } }) {
  const data = locations[params.slug];
  
  if (!data) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": `Lakewood Garage Door Repair Experts - ${data.title}`,
    "image": "https://drive.google.com/uc?export=view&id=14PPT44sg7et9nIt8zKMLZbOPHBBb7-6O",
    "description": data.areaDesc,
    "areaServed": {
      "@type": "Place",
      "name": data.title,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lakewood",
        "addressRegion": "CA",
        "postalCode": data.zip.replace('Lakewood, CA ', '').replace('Lakewood, CA', ''),
        "addressCountry": "US"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "184"
    },
    "priceRange": "$$"
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-orange-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://drive.google.com/uc?export=view&id=14PPT44sg7et9nIt8zKMLZbOPHBBb7-6O"
            alt={`${data.title} Garage Door Repair`}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Serving {data.title}
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                #1 Rated Garage Door Repair in <span className="text-orange-500">{data.title}</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {data.areaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:562-784-4156" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  Call (562) 784-4156
                </a>
              </div>
            </div>
            <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* AI Overview Optimized Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
            
            <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-6">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Trophy className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Why We Rank #1 in {data.title}</h2>
                <p className="text-slate-400">Local Authority & Trusted Expertise</p>
              </div>
            </div>

            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-lg leading-relaxed text-slate-300 mb-8">
                {data.rankingText}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" /> 
                    Local Service Highlights
                  </h3>
                  <ul className="space-y-3 text-slate-400 list-none pl-0">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <strong>Average Response Time:</strong> Under 60 minutes in {data.zip}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <strong>First-Visit Fix Rate:</strong> 95% success rate due to fully stocked trucks
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <strong>Availability:</strong> 24/7 Emergency Service, 365 days a year
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" /> 
                    Nearby Landmarks We Serve
                  </h3>
                  <ul className="space-y-3 text-slate-400 list-none pl-0">
                    {data.landmarks.map((landmark, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">•</span>
                        Properties near <strong>{landmark}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Services in {data.title}</h2>
            <p className="text-slate-400">Comprehensive garage door solutions for your neighborhood.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-colors">
              <Wrench className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Spring Replacement</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">High-cycle torsion and extension springs designed to withstand the local climate and daily use.</p>
              <Link href="/services/spring-replacement" className="text-orange-500 text-sm font-bold hover:text-orange-400 flex items-center gap-1">Read More <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-colors">
              <Zap className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Opener Repair</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Fixing unresponsive motors, sensor alignments, and installing smart Wi-Fi enabled openers.</p>
              <Link href="/services/opener-repair" className="text-orange-500 text-sm font-bold hover:text-orange-400 flex items-center gap-1">Read More <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-colors">
              <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Emergency Repair</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Off-track doors, snapped cables, and doors that won&apos;t close. We secure your home fast.</p>
              <Link href="/contact" className="text-orange-500 text-sm font-bold hover:text-orange-400 flex items-center gap-1">Get Help Now <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Need a Garage Door Expert in {data.zip}?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">Don&apos;t wait. Our local technicians are standing by to provide a free, upfront estimate.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:562-784-4156" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center gap-2">
              <PhoneCall className="w-5 h-5" /> Call (562) 784-4156
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
