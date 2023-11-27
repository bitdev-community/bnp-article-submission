import React, { ReactNode, useState } from 'react';
import { Box } from '@mui/material';
import { darkTheme } from '@bits-and-pieces/design.foundation.theming.dark-theme';
import { lightTheme } from '@bits-and-pieces/design.foundation.theming.light-theme';
import { ThemeProvider } from '@bits-and-pieces/design.foundation.theming.theme-provider';
import { ThemeToggle } from '@bits-and-pieces/design.foundation.theming.theme-toggle';

/**
 * use the mounter to inject and wrap your component previews
 * with common needs like [routing](), [theming]() and [data fetching]().
 */
export interface MUIPreviewContextProps {
  children: ReactNode;
  // Define additional prop types here
  customProp?: string;
}

// eslint-disable-next-line react/prop-types
// @ts-ignore
export function MUIPreviewContext({ children }: MUIPreviewContextProps) {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme() : lightTheme()}>
      <Box sx={{ p: 5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ThemeToggle
            isDark={themeMode === 'dark'}
            onClick={() =>
              setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
            }
          />
        </Box>
        {children}
      </Box>
    </ThemeProvider>
  );
}
