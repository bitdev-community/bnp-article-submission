import React, { useState } from 'react';
import { Link } from '@bits-and-pieces/design.ui.actions.link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TextIcon } from '@bits-and-pieces/design.patterns.text-icon';
import { useTheme } from '@mui/material';

export type LinkTextProps = {
  /**
   * text to be rendered in the link
   */
  linkText: string;

  /**
   * the font size of the link text
   */
  fontSize?: number;

  /**
   * the font weight of the link text
   */
  fontWeight?: number;

  /**
   * the size of the icon
   */
  iconSize?: 'small' | 'medium' | 'large' | 'inherit' | undefined;

  /**
   * the url to be linked to
   */
  url: string;

  /**
   * the color
   */
  color?: 'primary' | 'secondary';
};

export function LinkText({
  url,
  linkText,
  iconSize = 'medium',
  fontWeight = 400,
  fontSize = 16,
  color = 'primary',
}: LinkTextProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const theme = useTheme();
  return (
    <Link
      to={url}
      style={{
        color: theme.palette.text[color],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <TextIcon
        icon={
          <ArrowForwardIcon
            fontSize={iconSize}
            sx={{
              transition: 'all 0.3s ease-in-out',
              color: 'inherit',
              ...(hovered && { transform: 'translateX(5px)' }),
            }}
          />
        }
        text={linkText}
        fontSize={fontSize}
        fontWeight={fontWeight}
      />
    </Link>
  );
}
