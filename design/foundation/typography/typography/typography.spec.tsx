import React from 'react';
import { render } from '@testing-library/react';
import { BasicTypography } from './typography.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTypography />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
