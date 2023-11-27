import React from 'react';
import { Button, ThemeProvider } from '@mui/material';
import { lightTheme } from './light-theme';

export function LightTheme() {
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <Button>
        Hello, Light Theme.
      </Button>
    </ThemeProvider>
  );
}
