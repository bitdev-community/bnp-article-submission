import React from 'react';
import { render } from '@testing-library/react';
import { SampleWorkItem } from './work-item.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<SampleWorkItem />);
  const rendered = getByText('Company');
  expect(rendered).toBeTruthy();
});
