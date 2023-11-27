import React from 'react';
import { ThemeProvider } from '@bits-and-pieces/design.foundation.theming.theme-provider';
import { Button } from '@mui/material';
import { darkTheme } from './dark-theme';

export const DarkTheme = () => (
  <ThemeProvider theme={darkTheme()}>
    <Button variant="contained">Hello, Dark Theme.</Button>
  </ThemeProvider>
);
