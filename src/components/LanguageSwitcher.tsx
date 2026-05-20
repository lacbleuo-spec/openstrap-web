'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' },
  { code: 'zh-CN', label: '中文' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const current =
    languages.find((language) => language.code === locale) ?? languages[0];

  const changeLocale = (nextLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = nextLocale;

    router.push(segments.join('/'));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div ref={wrapperRef} className='relative'>
      <button
        type='button'
        onClick={() => setOpen((value) => !value)}
        aria-haspopup='listbox'
        aria-expanded={open}
        className='inline-flex h-10 items-center gap-1.5 rounded-full border border-neutral-200 bg-white pl-3 pr-2 text-sm font-medium text-neutral-700 shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50'
      >
        <span>{current.label}</span>
        <ChevronDown
          size={15}
          strokeWidth={2}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          role='listbox'
          className='absolute right-0 top-full z-[60] mt-2 w-36 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-1.5 shadow-xl'
        >
          {languages.map((language) => {
            const selected = language.code === locale;

            return (
              <button
                key={language.code}
                type='button'
                role='option'
                aria-selected={selected}
                onClick={() => changeLocale(language.code)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${
                  selected
                    ? 'bg-neutral-100 font-semibold text-black'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-black'
                }`}
              >
                <span>{language.label}</span>
                {selected && <Check size={15} strokeWidth={2.4} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
