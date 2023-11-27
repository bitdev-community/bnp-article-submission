import { themeCreator } from '@bits-and-pieces/design.foundation.theming.theme-creator';
import { alpha, Theme, ThemeOptions } from '@mui/material';
import { baseTheme } from '@bits-and-pieces/design.foundation.theming.base-theme';

/**
 * Function that returns a configured dark theme
 * @param additionalConfigurations - Additional configurations to be applied to the theme
 * @returns Configured dark theme
 */
export function darkTheme(additionalConfigurations?: ThemeOptions): Theme {
  return themeCreator(
    baseTheme(),
    {
      palette: {
        mode: 'dark',
        primary: {
          main: '#000',
        },
        text: {
          primary: '#E6E6E8',
          secondary: '#B5B4B9',
        },
        background: {
          default: '#070414',
          paper: '#1B1827',
        },
        divider: '#2F2C3A',
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
              ':hover': {
                backgroundColor: alpha('#CBF382', 0.35),
              },
              color: '#E6E6E8',
              backgroundColor: '#000',
              '&.Mui-disabled': {
                backgroundColor: 'rgba(203, 243, 130, 0.35)',
              },
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
        MuiSwitch: {
          styleOverrides: {
            switchBase: {
              // Controls default (unchecked) color for the thumb
              color: '#ccc',
            },
            track: {
              // Controls default (unchecked) color for the track
              opacity: 0.2,
              backgroundColor: '#fff',
              '$checked$checked + &': {
                // Controls checked color for the track
                opacity: 0.7,
                backgroundColor: '#fff',
              },
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              color: '#CBF382',
              backgroundColor: '#2F2C3A',
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
              backgroundColor: '#2F2C3A',
              border: '1px solid #2F2C3A',
              color: alpha('#FFF', 0.7),
            },
            '&.Mui-focused': {
              color: alpha('#FFF', 0.85),
            },
          },
        },
        MuiToggleButton: {
          styleOverrides: {
            root: {
              borderRadius: '8px',
              borderColor: '#83828A',
              transition: 'all 0.3s ease',
              textTransform: 'none',
              height: '40px',
              color: '#83828A !important',
              '& .MuiTypography-root': {
                color: '#83828A',
              },
              '&.Mui-selected': {
                backgroundColor: '#CBF382',
                color: '#070414 !important',
                '&:hover': {
                  backgroundColor: alpha('#CBF382', 0.8),
                },
                '& .MuiTypography-root': {
                  color: '#070414',
                },
              },
            },
          },
        },
      },
      typography: {
        button: {
          fontWeight: 500,
          color: '#070414',
        },
        allVariants: {
          color: '#EDEDED',
        },
        fontFamily: 'CircularXX',
      },
    },
    { ...additionalConfigurations }
  );
}
