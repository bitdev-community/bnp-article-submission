import React from 'react';
import { Typography } from '@bits-and-pieces/design.foundation.typography.typography';
import { ToggleButton } from './toggle-button';

export const SampleToggleButton = () => {
  return (
    <ToggleButton
      options={[
        {
          label: <Typography variant="body2">Option 1</Typography>,
          value: 'option1',
        },
        {
          label: <Typography variant="body2">Option 2</Typography>,
          value: 'option2',
        },
      ]}
      onClick={() => {
        console.log('clicked');
      }}
    />
  );
};
