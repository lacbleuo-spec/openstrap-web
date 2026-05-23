// Features.tsx

'use client';

import { useTranslations } from 'next-intl';
import {
  CalendarDays,
  ListChecks,
  Copy,
  Bell,
  Lock,
  ChartNoAxesColumnIncreasing,
  Archive,
  RefreshCw,
  Sparkles,
} from 'lucide-react';

const features = [
  { key: 'aiGoalPlanning', Icon: Sparkles },
  { key: 'weeklyGoalPlanning', Icon: CalendarDays },
  { key: 'dailyGoalBreakdown', Icon: ListChecks },
  { key: 'copyGoals', Icon: Copy },
  { key: 'timeReminders', Icon: Bell },
  { key: 'goalLock', Icon: Lock },
  { key: 'progressTracking', Icon: ChartNoAxesColumnIncreasing },
  { key: 'crossDeviceSync', Icon: RefreshCw },
  { key: 'somedayGoals', Icon: Archive },
] as const;

export default function Features() {
  const t = useTranslations('features');

  return (
    <section
      id='features'
      className='mx-auto max-w-7xl scroll-mt-24 px-8 py-20'
    >
      <div className='mb-14 max-w-2xl'>
        <p className='mb-4 text-sm font-semibold text-blue-600'>
          {t('eyebrow')}
        </p>

        <h2 className='text-4xl font-bold tracking-[-0.03em]'>{t('title')}</h2>

        <p className='mt-5 text-neutral-600'>{t('description')}</p>
      </div>

      <div className='grid gap-8 md:grid-cols-3'>
        {features.map(({ key, Icon }) => (
          <div
            key={key}
            className='rounded-3xl border border-neutral-100 p-6 transition hover:-translate-y-1 hover:shadow-lg'
          >
            <div className='mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600'>
              <Icon size={22} strokeWidth={2.2} />
            </div>

            <h3 className='mb-3 text-lg font-bold'>
              {t(`items.${key}.title`)}
            </h3>

            <p className='text-sm leading-7 text-neutral-600'>
              {t(`items.${key}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
