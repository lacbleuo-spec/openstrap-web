// Footer.tsx

export default function Footer() {
  return (
    <footer className='border-t border-neutral-200 bg-neutral-900 px-8 py-10 text-white'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        <div>
          <p className='text-lg font-bold tracking-[-0.03em]'>Openstrap Inc.</p>

          <p className='mt-2 text-sm text-neutral-400'>
            Open possibility, connect technology.
          </p>
        </div>

        <div className='text-sm leading-7 text-neutral-400 md:text-right'>
          <p>
            <span className='text-neutral-500'>CEO</span>{' '}
            <span className='text-neutral-200'>JANG Sanggu</span>
          </p>

          <p>Copyright 2026 Openstrap Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
