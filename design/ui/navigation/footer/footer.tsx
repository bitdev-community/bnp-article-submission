import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@bits-and-pieces/design.foundation.typography.typography';

export type FooterProps = {
  leftContent: string;
  rightContent: string;
};

export function Footer({ leftContent, rightContent }: FooterProps) {
  return (
    <Box
      sx={{
        width: '100%',
        borderTop: (theme) => `1.5px solid ${theme.palette.divider}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 2,
      }}
    >
      <Typography variant="body2">{leftContent}</Typography>
      <Typography variant="body2" fontWeight={400}>
        {rightContent}
      </Typography>
    </Box>
  );
}
