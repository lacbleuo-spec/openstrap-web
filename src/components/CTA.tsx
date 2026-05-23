// CTA.tsx

'use client';

import { useTranslations } from 'next-intl';

const APP_STORE_URL = '#';
const GOOGLE_PLAY_URL = '#';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section id='download' className='mx-auto max-w-7xl px-8 pb-20'>
      <div className='rounded-[2rem] bg-neutral-50 px-8 py-16 text-center'>
        <h2 className='text-3xl font-bold tracking-[-0.03em] md:text-4xl'>
          {t('title')}
        </h2>

        <p className='mx-auto mt-5 max-w-2xl text-neutral-600'>
          {t('description')}
        </p>

        <div className='mt-8 flex flex-wrap justify-center gap-5'>
          <a
            href={APP_STORE_URL}
            target='_blank'
            rel='noreferrer'
            aria-label={t('appStoreAria')}
            className='inline-flex h-14 items-center rounded-xl bg-black px-5 text-white transition hover:-translate-y-0.5 hover:shadow-lg'
          >
            <span className='mr-3 text-3xl leading-none'></span>
            <span className='text-left leading-tight'>
              <span className='block text-[10px] font-medium'>
                {t('appStoreSmall')}
              </span>
              <span className='block text-xl font-semibold'>
                {t('appStore')}
              </span>
            </span>
          </a>

          <a
            href={GOOGLE_PLAY_URL}
            target='_blank'
            rel='noreferrer'
            aria-label={t('googlePlayAria')}
            className='inline-flex h-14 items-center rounded-xl bg-black px-5 text-white transition hover:-translate-y-0.5 hover:shadow-lg'
          >
            <span className='mr-3 text-2xl leading-none'>▶</span>
            <span className='text-left leading-tight'>
              <span className='block text-[10px] font-medium'>
                {t('googlePlaySmall')}
              </span>
              <span className='block text-xl font-semibold'>
                {t('googlePlay')}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
