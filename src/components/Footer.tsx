// Footer.tsx

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className='border-t border-neutral-200 bg-neutral-900 px-8 py-10 text-white'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        <div>
          <p className='text-lg font-bold tracking-[-0.03em]'>Openstrap Inc.</p>

          <p className='mt-2 text-sm text-neutral-300'>{t('tagline')}</p>

          <p className='mt-3 whitespace-pre-line text-sm leading-6 text-neutral-400'>
            {t('description')}
          </p>
        </div>

        <div className='text-sm leading-7 text-neutral-300 md:text-right'>
          <p>
            <span className='text-neutral-300'>{t('ceo')}</span>{' '}
            <span className='text-neutral-300'>JANG Sanggu</span>
          </p>

          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
