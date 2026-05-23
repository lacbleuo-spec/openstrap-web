import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.openstrap.net/#organization',
        name: 'Openstrap',
        url: 'https://www.openstrap.net',
        description:
          'We connect OpenAI and diverse technologies to build user-centered applications.',
        founder: {
          '@type': 'Person',
          name: 'Sanggu JANG',
          jobTitle: 'CEO',
        },
        copyrightNotice: 'Copyright 2026 Openstrap Inc. All rights reserved.',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.openstrap.net/#website',
        name: 'Openstrap',
        url: 'https://www.openstrap.net',
        description:
          'We connect OpenAI and diverse technologies to build user-centered applications.',
        publisher: {
          '@id': 'https://www.openstrap.net/#organization',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://www.openstrap.net/#weekboard',
        name: 'Weekboard',
        url: 'https://www.openstrap.net',
        applicationCategory: 'ProductivityApplication',
        operatingSystem: 'Web, iOS, Android',
        publisher: {
          '@id': 'https://www.openstrap.net/#organization',
        },
        headline: 'Turn weekly goals into daily execution.',
        description:
          'Weekboard is a goal execution management service that goes beyond setting goals. It helps turn weekly goals into day-by-day action plans so users can actually follow through.',
        slogan: 'If you’ve set a goal, now it’s time to execute.',
        abstract:
          'Openstrap connects OpenAI and diverse technologies to build user-centered applications. Weekboard is one of Openstrap’s main services, helping users turn their goals into plans they can execute every day.',
        featureList: [
          'Weekly Goal-Based Planning',
          'Start by organizing the goals you want to achieve this week and setting a clear direction. Instead of beginning with scattered daily tasks, you can plan around bigger weekly goals.',

          'Daily Action Plan Distribution',
          'Divide weekly goals into day-by-day action items so you know exactly what to do each day. Large goals become practical daily plans you can actually execute.',

          'Copy Goals by Day',
          'Quickly copy weekly goals to the days you choose and reduce repetitive input. You can distribute goals to every day, selected days, or even carry them into next week.',

          'Execution Time & Reminders',
          'Set a specific time and reminder for each daily goal. Your goals become scheduled action plans inside your day, not just items on a list.',

          'Goal Delete Lock',
          'Lock important goals so they cannot be deleted too easily. It helps protect the commitments you made to yourself from momentary laziness or the urge to give up.',

          'Progress Tracking',
          'Check your weekly execution status based on completed goals. Go beyond simple checkmarks and see at a glance how much your goals are actually being carried out.',

          'Someday Goals & Plans',
          'Save ideas and long-term goals that you are not ready to execute right now. Keep this week’s plans separate from future goals so good ideas do not get lost.',

          'Automatic Sync',
          'Manage the same goal status across mobile and web. Check and update your goals on your phone while moving, or on the web while working, without losing continuity.',

          'AI Goal Planning Support',
          'Enter a vague goal and get help turning it into practical steps and realistic daily plans. Even users who are not used to planning goals can get started right away.',
        ],
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    ],
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
