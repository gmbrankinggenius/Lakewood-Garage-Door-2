import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Lakewood Garage Door Repair Experts | 24/7 Local Service',
  description: 'Top-rated garage door repair, spring replacement, and opener installation in Lakewood. Fast, reliable, and affordable 24/7 emergency service. Call now for a free estimate!',
  keywords: ['Lakewood garage door repair', 'garage door spring replacement', 'garage opener repair', '24/7 emergency garage door service', 'local garage door experts'],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <body className="font-sans antialiased text-slate-300 bg-slate-950 flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
