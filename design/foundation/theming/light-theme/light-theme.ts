import { alpha, Theme, ThemeOptions } from '@mui/material';
import { themeCreator } from '@bits-and-pieces/design.foundation.theming.theme-creator';
import { baseTheme } from '@bits-and-pieces/design.foundation.theming.base-theme';

/**
 * Function that returns a configured light theme
 * @param additionalConfigurations - Additional configurations to be applied to the theme
 * @returns Configured light theme
 */
export function lightTheme(additionalConfigurations?: ThemeOptions): Theme {
  return themeCreator(
    baseTheme(),
    {
      palette: {
        mode: 'light',
        primary: {
          main: '#6C5CE7',
        },
        background: {
          default: '#FFFFFF',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#2B2B2B',
        },
        divider: '#BABEC9',
      },
      components: {
        MuiButton: {
          defaultProps: {
            disableRipple: true,
            disableElevation: true,
            variant: 'contained',
          },
          styleOverrides: {
            root: {
              textTransform: 'none',
              color: '#FFFFFF',
            },
            sizeSmall: {
              padding: '6px 16px',
            },
            sizeMedium: {
              padding: '8px 20px',
            },
            sizeLarge: {
              padding: '11px 24px',
            },
            textSizeSmall: {
              padding: '7px 12px',
            },
            textSizeMedium: {
              padding: '9px 16px',
            },
            textSizeLarge: {
              padding: '12px 16px',
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              color: '#6C5CE7',
              fontWeight: 700,
              height: '24px',
              borderRadius: '6px',
              padding: '4px 8px',
              verticalAlign: 'middle',
              alignItems: 'center',
            },
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: '8px',
              borderColor: '#EDEDED',
            },
            input: {
              '&::placeholder': {
                color: '#707279',
              },
            },
          },
        },
        MuiInputLabel: {
          styleOverrides: {
            root: {
              color: '#707279',
            },
          },
        },
        MuiToggleButton: {
          styleOverrides: {
            root: {
              borderRadius: '8px',
              borderColor: '#EDEDED',
              transition: 'all 0.3s ease',
              textTransform: 'none',
              height: '40px',
              '&.Mui-selected': {
                backgroundColor: '#6C5CE7',
                color: '#EDEDED !important',
                '&:hover': {
                  backgroundColor: alpha('#6C5CE7', 0.8),
                },
                '& .MuiTypography-root': {
                  color: '#EDEDED',
                },
              },
            },
          },
        },
      },
      typography: {
        button: {
          fontWeight: 600,
        },
        allVariants: {
          color: '#2B2B2B',
        },
        fontFamily: 'CircularXX',
      },
    },
    { ...additionalConfigurations }
  );
}
