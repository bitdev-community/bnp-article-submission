import React from 'react';
import { render } from '@testing-library/react';
import { SampleFooter } from './footer.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<SampleFooter />);
  const rendered = getByText('Thanks for Visiting.');
  expect(rendered).toBeTruthy();
});
