import React, { useCallback, useState } from 'react';
import { isNull } from 'util';
import { ToggleButtonGroup, ToggleButton as MuiToggleButton } from '@mui/material';

export type ToggleButtonOption = {
  value: string;
  label: React.ReactNode;
}

export type ToggleButtonProps = {
  /**
   * The options to display in the toggle button.
   */
  options: ToggleButtonOption[];

  /**
   * the callback function to be called when an option is selected.
   * @param value the value of the selected option
   */
  onClick: (value: string) => void;

  /**
   * the value of the selected option
   */
  value?: string;
};

export function ToggleButton({ options, onClick, value }: ToggleButtonProps) {
  const [option, setOption] = useState<string>(value || options[0]?.value);

  const handleOptionChange = useCallback((_event: React.MouseEvent<HTMLElement>, newOption: string) => {
    if (newOption && !isNull(newOption)) {
      setOption(newOption);
      onClick(newOption);
    }
  }, [onClick]);

  return (
    <ToggleButtonGroup
      exclusive
      value={option}
      onChange={handleOptionChange}
    >
      {options.map((eachOption) => (
        <MuiToggleButton key={eachOption.value} value={eachOption.value}>
          {eachOption.label}
        </MuiToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
