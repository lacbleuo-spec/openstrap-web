import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main id='top' className='scroll-smooth'>
      <Header />
      <Hero />
      <TrustedBy />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
