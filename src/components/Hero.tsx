// Hero.tsx

'use client';

import { useTranslations } from 'next-intl';
import {
  Cloud,
  Copy,
  Menu,
  Trash2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const WEB_APP_URL = 'https://www.weeklygoalplanner.com/';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id='planner'
      className='mx-auto grid max-w-7xl scroll-mt-24 items-center gap-16 px-8 py-16 md:grid-cols-2 md:py-20'
    >
      <div>
        <div className='mb-8 inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600 shadow-sm'>
          <span className='h-2 w-2 rounded-full bg-blue-500' />
          {t('badge')}
        </div>

        <h1 className='max-w-2xl text-5xl font-bold leading-tight tracking-[-0.04em] text-black md:text-6xl'>
          {t('title.line1')}
          <br />
          {t('title.line2')}
        </h1>

        <p className='mt-8 max-w-md text-lg leading-8 text-neutral-600'>
          {t('description')}
        </p>

        <div className='mt-10 flex flex-wrap gap-5'>
          <a
            href={WEB_APP_URL}
            target='_blank'
            rel='noreferrer'
            className='rounded-md bg-black px-10 py-4 text-sm font-semibold text-white shadow-lg'
          >
            {t('openWebApp')} →
          </a>

          <a
            href='#download'
            className='rounded-md border border-neutral-400 px-10 py-4 text-sm font-semibold'
          >
            {t('downloadMobileApp')}
          </a>
        </div>

        <p className='mt-10 max-w-md text-sm leading-7 text-neutral-500'>
          {t('companyDescription')}
        </p>
      </div>

      <div className='flex justify-center md:justify-end'>
        <a
          href={WEB_APP_URL}
          target='_blank'
          rel='noreferrer'
          aria-label='Open Weekly Goal-Based Planner web app'
          className='group block'
        >
          <div className='relative h-[580px] w-[290px] overflow-hidden rounded-[2.6rem] border-[8px] border-black bg-[#f2f2f7] shadow-2xl transition-transform duration-300 group-hover:-translate-y-1'>
            <div className='absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black' />

            <div className='h-full overflow-hidden px-3.5 pt-[52px]'>
              <div className='space-y-2.5'>
                <section className='rounded-[20px] bg-white px-4 py-4'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h3 className='text-[13px] font-bold'>Cloud connected</h3>
                      <p className='mt-1 text-[9px] text-gray-500'>
                        user@openstrap.com
                      </p>
                    </div>

                    <span className='flex items-center gap-1 text-[10px] font-bold text-blue-500'>
                      <Cloud size={12} strokeWidth={2.4} fill='currentColor' />
                      Sync
                    </span>
                  </div>
                </section>

                <section className='rounded-[20px] bg-white px-4 py-4'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h3 className='text-[13px] font-bold'>
                        Someday Goals & Plans
                      </h3>
                      <p className='mt-1 text-[9px] text-gray-500'>3 goals</p>
                    </div>

                    <ChevronDown
                      size={12}
                      strokeWidth={2.4}
                      className='text-gray-500'
                    />
                  </div>
                </section>

                <section className='rounded-[20px] bg-white px-4 py-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                      <h3 className='text-[13px] font-bold'>May 18 - May 24</h3>
                      <ChevronDown
                        size={11}
                        strokeWidth={2.4}
                        className='text-gray-500'
                      />
                    </div>

                    <span className='text-[11px] font-bold tracking-widest text-gray-500'>
                      •••
                    </span>
                  </div>

                  <div className='mt-4 flex items-center justify-between'>
                    <div>
                      <div className='flex items-center gap-1'>
                        <h4 className='text-[13px] font-bold'>
                          Overall Progress
                        </h4>
                        <ChevronDown
                          size={11}
                          strokeWidth={2.4}
                          className='text-gray-500'
                        />
                      </div>

                      <p className='mt-1 text-[9px] text-gray-500'>
                        72 / 84 completed
                      </p>
                    </div>

                    <div className='flex items-center gap-2'>
                      <strong className='text-[24px] leading-none text-blue-500'>
                        86%
                      </strong>

                      <div className='h-[38px] w-[38px] rounded-full border-[5px] border-blue-500 border-l-blue-100' />
                    </div>
                  </div>

                  <div className='mt-4 flex items-end justify-between'>
                    {[58, 44, 64, 52, 46, 38, 50].map((height, index) => (
                      <div
                        key={index}
                        className='flex flex-col items-center gap-1.5'
                      >
                        <div className='flex h-[66px] items-end'>
                          <div
                            className='relative w-[11px] overflow-hidden rounded-full bg-blue-100'
                            style={{ height: Math.max(height + 8, 28) }}
                          >
                            <div
                              className='absolute bottom-0 left-0 w-full rounded-full bg-blue-500'
                              style={{ height }}
                            />
                          </div>
                        </div>

                        <span className='text-[8px] text-gray-500'>
                          {
                            ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][
                              index
                            ]
                          }
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className='rounded-[20px] bg-white px-4 py-4'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h3 className='text-[13px] font-bold'>
                        Weekly Goals & Plans
                      </h3>
                      <p className='mt-1 text-[9px] text-gray-500'>19 goals</p>
                    </div>

                    <ChevronUp
                      size={12}
                      strokeWidth={2.4}
                      className='text-gray-500'
                    />
                  </div>

                  <div className='mt-4 space-y-3.5'>
                    {[
                      'Complete 3 backend API tasks this week',
                      'Fix 5 high-priority bugs',
                      'Refactor one legacy module',
                      'Improve test coverage for the payment service',
                    ].map((goal) => (
                      <div key={goal} className='flex items-center gap-2.5'>
                        <p className='min-w-0 flex-1 truncate text-[11px] text-black'>
                          {goal}
                        </p>

                        <Copy
                          size={12}
                          strokeWidth={2.2}
                          className='shrink-0 text-gray-400'
                        />
                        <Menu
                          size={12}
                          strokeWidth={2.2}
                          className='shrink-0 text-gray-400'
                        />
                        <Trash2
                          size={12}
                          strokeWidth={2.2}
                          className='shrink-0 text-red-500'
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f2f2f7] to-transparent' />
          </div>
        </a>
      </div>
    </section>
  );
}
