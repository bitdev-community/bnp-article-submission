import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Logo } from '@showoff/design.brand.logo';
import { ThemeToggle } from '@bits-and-pieces/design.foundation.theming.theme-toggle';
import { Header } from './header';

export const SampleHeader = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <MemoryRouter>
      <Header
        logo={<Logo />}
        navLinks={[
          { label: 'Projects', url: '/projects' },
          { label: 'Contact', url: '/contact' },
          { label: 'About', url: '/about' },
        ]}
        themeToggle={
          <ThemeToggle
            size="small"
            isDark={isDark}
            onClick={() => setIsDark(!isDark)}
          />
        }
      />
    </MemoryRouter>
  );
};
