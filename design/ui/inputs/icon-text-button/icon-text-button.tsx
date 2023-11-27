import React, { ReactNode } from 'react';
import { alpha, Box, BoxProps } from '@mui/material';
import { Typography } from '@bits-and-pieces/design.foundation.typography.typography';

export type IconTextButtonProps = {
  icon: ReactNode;
  textPrimary: string;
  textSecondary?: string;
} & BoxProps;

export function IconTextButton({
  icon,
  textPrimary,
  textSecondary,
  ...rest
}: IconTextButtonProps) {
  return (
    <Box
      sx={{
        width: 'fit-content',
        display: 'flex',
        gap: 1.5,
        alignItems: 'center',
        background: (theme) => theme.palette.divider,
        borderRadius: '8px',
        px: 1.5,
        py: 0.8,
        transition: 'background 0.1s ease-in-out',
        ':hover': {
          background: (theme) => alpha(theme.palette.divider, 0.8),
        },
        cursor: 'pointer',
      }}
      {...rest}
    >
      <Box
        sx={{
          height: 'fit-content',
          width: 'fit-content',
          mt: 0.5,
        }}
      >
        {icon}
      </Box>
      <Box>
        {textSecondary && (
          <Typography
            variant="body2"
            fontSize={12}
            fontWeight={400}
            lineHeight="19px"
          >
            {textSecondary}
            <div
              style={{
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              {textPrimary}
            </div>
          </Typography>
        )}
      </Box>
    </Box>
  );
}
