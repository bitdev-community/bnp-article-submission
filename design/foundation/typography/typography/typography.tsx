import React, { ReactNode } from 'react';
import { Typography as MUITypography, TypographyProps as MUITypographyProps } from '@mui/material';

export type TypographyProps = {
  /**
   * a node to be rendered in the typography
   */
  children?: ReactNode;
} & MUITypographyProps;

export function Typography({ children, ...rest }: TypographyProps) {
  return (
    <MUITypography
      {...rest}
    >
      {children}
    </MUITypography>
  );
}
