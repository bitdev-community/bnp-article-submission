import React from 'react';
import { render } from '@testing-library/react';
import { SampleHeader } from './header.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<SampleHeader />);
  const rendered = getByText('Projects');
  expect(rendered).toBeTruthy();
});
