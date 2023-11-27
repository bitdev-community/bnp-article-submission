import React, { forwardRef } from 'react';
import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from '@mui/material';

export type TextFieldProps = {} & MUITextFieldProps;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    return <MUITextField inputRef={ref} {...props} />;
  }
);
