import React, { ReactNode } from 'react';
import { AppBar, Container, Box, Toolbar } from '@mui/material';
import { Typography } from '@bits-and-pieces/design.foundation.typography.typography';
import { Link } from '@bits-and-pieces/design.ui.actions.link';
import { HeaderLink } from './header.type';

export type HeaderProps = {
  logo: ReactNode;
  navLinks: HeaderLink[];
  themeToggle?: ReactNode;
};

export function Header({ logo, navLinks = [], themeToggle }: HeaderProps) {
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        color: 'text.secondary',
      }}
    >
      <Toolbar disableGutters sx={{ minHeight: 64, width: '100%' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ mt: 0.6 }}>
              <Link to="/">{logo}</Link>
            </Box>
            <div>
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                {navLinks.map((link) => (
                  <Link to={link.url} key={link.url}>
                    <Typography
                      variant="body2"
                      fontWeight={400}
                      color="textPrimary"
                    >
                      {link.label}
                    </Typography>
                  </Link>
                ))}
                {themeToggle && themeToggle}
              </Box>
            </div>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
