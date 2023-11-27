import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Link } from './link';

export const BasicLink = () => (
  <MemoryRouter>
    <Link
      to="/"
    >hello world!
    </Link>
  </MemoryRouter>
);
