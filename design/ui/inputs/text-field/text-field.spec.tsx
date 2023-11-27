import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BasicTextField } from './text-field.composition';

it('should render a text field with empty text', () => {
  const { getByLabelText } = render(<BasicTextField />);
  const textField = getByLabelText('Basic Text Field') as HTMLInputElement;
  expect(textField.value).toBe('');
});

it('should render a text field with text', () => {
  const TEXT_TO_ENTER = 'Hello World';
  const { getByLabelText } = render(<BasicTextField />);
  const textField = getByLabelText('Basic Text Field') as HTMLInputElement;
  fireEvent.change(textField, { target: { value: TEXT_TO_ENTER } });
  expect(textField.value).toBe(TEXT_TO_ENTER);
});
