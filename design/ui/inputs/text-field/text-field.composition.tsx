import React, { useState } from 'react';
import { TextField } from './text-field';

export const BasicTextField = () => {
  const [value, setValue] = useState<string>('');
  return (
    <TextField
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="Basic Text Field"
    />
  );
};
