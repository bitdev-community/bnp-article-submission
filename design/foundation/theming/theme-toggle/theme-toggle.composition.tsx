import React, { useState } from 'react';
import { lightTheme } from '@bits-and-pieces/design.foundation.theming.light-theme';
import { ThemeProvider } from '@bits-and-pieces/design.foundation.theming.theme-provider';
import { ThemeToggle } from './theme-toggle';

export const BasicThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeProvider theme={lightTheme()}>
      <ThemeToggle isDark={isDark} onClick={() => setIsDark(!isDark)} />
    </ThemeProvider>
  );
};
