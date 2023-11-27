import { Typography } from '@bits-and-pieces/design.foundation.typography.typography';
import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

export type TextIconProps = {
  /**
   * the font size of the link text
   */
  fontSize?: number;

  /**
   * the font weight of the link text
   */
  fontWeight?: number;

  /**
   * The text to be rendered
   */
  text: string;

  /**
   * the icon to be rendered
   */
  icon: ReactNode;

  /**
   * the position of the icon
   */
  iconPosition?: 'left' | 'right';
};

export function TextIcon({
  fontSize,
  fontWeight,
  text,
  icon,
  iconPosition = 'right',
}: TextIconProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        flexWrap: 'wrap',
        width: 'fit-content',
      }}
    >
      {iconPosition === 'left' && icon}
      <Typography
        variant="body1"
        fontSize={fontSize}
        fontWeight={fontWeight}
        sx={{
          color: 'inherit',
        }}
      >
        {text}
      </Typography>
      {iconPosition === 'right' && icon}
    </Box>
  );
}
