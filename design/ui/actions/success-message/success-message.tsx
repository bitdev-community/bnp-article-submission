import { ReactNode } from 'react';
import { Alert, AlertTitle } from '@mui/material';

export type SuccessMessageProps = {
  title: string | ReactNode;
  children: ReactNode;
};

export function SuccessMessage({ children, title }: SuccessMessageProps) {
  return (
    <Alert severity="success">
      <AlertTitle>{title}</AlertTitle>
      {children}
    </Alert>
  );
}
