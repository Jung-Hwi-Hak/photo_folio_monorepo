'use client';
import React from 'react';
import Providers from '@/apps/web/components/Providers';
import '@/apps/web/app/globals.css';
import { useModeStore } from '@/apps/web/store/store';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { darkMode } = useModeStore();
  return (
    <html lang={'kr'} className={darkMode ? 'dark' : 'light'} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
