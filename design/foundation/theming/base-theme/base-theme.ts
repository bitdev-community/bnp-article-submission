import { themeCreator } from "@bits-and-pieces/design.foundation.theming.theme-creator";
import { ThemeOptions } from "@mui/material";
import { getCircularXXFontFace } from "@showoff/design.fonts.ciruclar-xx";

export function baseTheme(): ThemeOptions {
  return themeCreator({
    components: {
      MuiCssBaseline: {
        styleOverrides: getCircularXXFontFace(),
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: 8,
          },
          sizeSmall: {
            padding: 4,
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiCardMedia: {
        styleOverrides: {
          media: {
            transition: 'transform 0.2s',
            // zoom in and out when hovered
            '&:hover': {
              transform: 'scale(1.1)',
            },
            borderRadius: '8px',
          },
          root: {
            borderRadius: '8px',
          }
        }
      }
    },
    typography: {
      fontFamily: "'CircularXX', 'Gill Sans', 'Gill Sans MT', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      body1: {
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '32px',
      },
      body2: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '32px',
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: '32px',
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: '32px',
      },
      overline: {
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.5px',
        lineHeight: 2.5,
        textTransform: 'uppercase',
      },
      caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.66,
      },
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.375,
      },
      h2: {
        fontWeight: 700,
        fontSize: '3rem',
        lineHeight: 1.375,
      },
      h3: {
        fontWeight: 700,
        fontSize: '2.25rem',
        lineHeight: 1.375,
      },
      h4: {
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: 1.375,
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.375,
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: 1.375,
      },
    },
  });
}
