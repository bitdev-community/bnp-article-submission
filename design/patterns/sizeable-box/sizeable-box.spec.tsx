import React from 'react';
import { render } from '@testing-library/react';
import { SampleSizeableBox } from './sizeable-box.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<SampleSizeableBox />);
  const rendered = getByText('This is a sizeable box');
  expect(rendered).toBeTruthy();
});
