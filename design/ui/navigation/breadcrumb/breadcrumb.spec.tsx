import React from 'react';
import { render } from '@testing-library/react';
import { SampleBreadcrumb } from './breadcrumb.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<SampleBreadcrumb />);
  const rendered = getByText('Breadcrumb');
  expect(rendered).toBeTruthy();
});


it('should render with the correct backticks', () => {
  const { getAllByText } = render(<SampleBreadcrumb />);
  const rendered = getAllByText('/');
  expect(rendered.length).toBe(3);
});

