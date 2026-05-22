// TrustedBy.tsx

'use client';

import { useTranslations } from 'next-intl';

const companies = [
  'Kakao',
  'Samsung',
  'Naver',
  'LINE',
  'Toss',
  'LG Electronics',
  'SK Group',
];

export default function TrustedBy() {
  const t = useTranslations('trustedBy');

  return (
    <section
      id='users'
      className='border-y border-neutral-100 bg-neutral-50 px-8 py-12'
    >
      <p className='text-center text-sm text-neutral-600'>{t('title')}</p>

      <div className='mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-12 text-2xl font-semibold text-neutral-500'>
        {companies.map((company) => (
          <span key={company}>{company}</span>
        ))}
      </div>

      <p className='mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-neutral-400'>
        {t('disclaimer')}
      </p>
    </section>
  );
}
