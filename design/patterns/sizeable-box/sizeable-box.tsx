import React, { ReactNode, useMemo } from 'react';
import { Box } from '@mui/material';

export type SizeableBoxProps = {
  /**
   * the children to render inside the box.
   */
  children?: ReactNode;

  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
};

export function SizeableBox({ children, size }: SizeableBoxProps) {
  const growableSize = useMemo(() => `${size}0%`, [size]);

  return (
    <Box
      sx={{
        width: growableSize,
        minWidth: growableSize,
        maxWidth: growableSize,
        border: (theme) => `1px solid ${theme.palette.grey[800]}`,
        borderRadius: 3,
        p: 2,
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      {children}
    </Box>
  );
}
