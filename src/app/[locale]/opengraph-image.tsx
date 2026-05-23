import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        background: '#0a0a0a',
        color: 'white',
        padding: '60px',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Left */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '520px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          Openstrap
        </div>

        <div
          style={{
            fontSize: 38,
            color: '#d1d5db',
            marginBottom: 20,
          }}
        >
          Connecting open technologies
        </div>

        <div
          style={{
            fontSize: 28,
            color: '#9ca3af',
            lineHeight: 1.4,
          }}
        >
          We connect OpenAI and diverse technologies to build user-centered
          applications.
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 22,
            color: '#60a5fa',
          }}
        >
          {locale.toUpperCase()}
        </div>
      </div>

      {/* Right */}
      <div
        style={{
          width: 520,
          height: 420,
          borderRadius: 24,
          overflow: 'hidden',
          border: '1px solid #27272a',
          display: 'flex',
        }}
      >
        <img
          src='https://www.openstrap.net/preview.png'
          width='520'
          height='420'
          alt='preview'
        />
      </div>
    </div>,
    {
      ...size,
    },
  );
}
