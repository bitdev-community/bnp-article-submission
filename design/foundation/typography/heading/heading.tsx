import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

export type HeadingProps = {
  value: string | React.ReactNode;
} & TypographyProps;

export function Heading({ value, fontSize = "48px", fontWeight = 700, ...rest }: HeadingProps) {
  return (
    <Typography
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...rest}
    >
      {value}
    </Typography>
  );
}
