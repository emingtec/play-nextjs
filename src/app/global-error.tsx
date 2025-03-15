'use client';

import { routing } from '@/i18n/routing';
import NextError from 'next/error';

export default function GlobalError() {
  return (
    <html lang={routing.defaultLocale}>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
