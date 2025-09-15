'use client';

import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@/lib/mui/theme';
import { useThemeStore } from '@/store/useThemeStore';

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  const mode = useThemeStore((s) => s.mode);

  // sync Tailwind's ".dark" class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [mode]);

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
