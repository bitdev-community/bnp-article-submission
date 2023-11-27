import React from 'react';
import { render } from '@testing-library/react';
import { SampleLinkText } from './link-text.composition';

it('should render correct link text', () => {
  const { getByText } = render(<SampleLinkText />);
  const rendered = getByText('Hello, Link Text');
  expect(rendered).toBeTruthy();
});
