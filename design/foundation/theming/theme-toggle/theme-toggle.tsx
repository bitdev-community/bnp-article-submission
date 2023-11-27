import React from 'react';
import { IconButton } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

export type ThemeToggleProps = {
  /**
  * Whether the dark mode is enabled or not.
  */
  isDark: boolean;

  /**
   * Callback to toggle the dark mode.
   */
  onClick: () => void;

  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
};

export function ThemeToggle({ isDark, onClick, size = 'small' }: ThemeToggleProps) {
  return (
    <IconButton onClick={onClick}
      sx={{
        transition: 'all 0.3s ease',
        color: 'inherit'
      }}
    >
      {isDark ? <WbSunnyOutlinedIcon
        fontSize={size}
      /> : <DarkModeOutlinedIcon
        fontSize={size}
      />}
    </IconButton>
  );
}
