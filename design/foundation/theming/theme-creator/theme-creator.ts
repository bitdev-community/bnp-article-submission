import { ThemeOptions, Theme } from "@mui/material";
import { createTheme } from '@mui/material/styles';

/**
 * Create a theme with the specified options.
 * @param options  Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */
export function themeCreator(options: ThemeOptions, ...args: object[]): Theme {
  return createTheme(options, ...args);
}
