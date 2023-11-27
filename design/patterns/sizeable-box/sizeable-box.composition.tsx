import React, { useState } from 'react';
import { Divider, TextField } from '@mui/material';
import { Typography } from '@bits-and-pieces/design.foundation.typography.typography';
import { SizeableBox } from './sizeable-box';

type Size = 7 | 2 | 1 | 10 | 3 | 4 | 5 | 6 | 8 | 9;

export const SampleSizeableBox = () => {
  const [size, setSize] = useState<Size>(7);

  const handleSizeChange = (value: string) => {
    const parsedValue = parseInt(value, 10) as Size;
    if (parsedValue && parsedValue <= 10 && parsedValue >= 1) {
      setSize(parsedValue);
    }
  };
  return (
    <>
      <TextField
        label="Size"
        type="number"
        value={size}
        onChange={(e) => handleSizeChange(e.target.value)}
      />
      <Divider sx={{ my: 2 }} />
      <SizeableBox size={size}>
        <Typography>This is a sizeable box</Typography>
      </SizeableBox>
    </>
  );
};
