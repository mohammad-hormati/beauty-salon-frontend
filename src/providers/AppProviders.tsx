'use client';

import React from 'react';
import QueryProvider from './QueryProvider';
import MuiProvider from './MuiProvider';

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <MuiProvider>{children}</MuiProvider>
    </QueryProvider>
  );
}
