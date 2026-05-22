// Header.tsx

'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  ['planner', '#planner'],
  ['users', '#users'],
  ['features', '#features'],
  ['download', '#download'],
] as const;

export default function Header() {
  const t = useTranslations('header');

  return (
    <header className='sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-xl'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-8 py-5'>
        <a href='#top' className='text-xl font-bold tracking-[-0.03em]'>
          Openstrap Inc.
        </a>

        <nav className='hidden items-center gap-10 text-sm font-medium text-neutral-700 md:flex'>
          {navItems.map(([key, href]) => (
            <a key={key} href={href} className='hover:text-black'>
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          <LanguageSwitcher />

          <a
            href='#download'
            className='rounded-lg bg-black px-5 py-3 text-sm font-medium text-white'
          >
            {t('downloadApp')}
          </a>
        </div>
      </div>
    </header>
  );
}
