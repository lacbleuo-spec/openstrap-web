import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Openstrap',
    url: 'https://www.openstrap.net',
    description:
      'We connect OpenAI and diverse technologies to build user-centered applications.',
    sameAs: [],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id='top' className='scroll-smooth'>
        <Header />
        <Hero />
        <TrustedBy />
        <Features />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
