import React, { useContext, createContext } from 'react';
import { Box, Container, Paper, Stack } from '@mui/material';
import { TextField } from '@bits-and-pieces/design.ui.inputs.text-field';
import { Button } from '@bits-and-pieces/design.ui.inputs.button';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

/* form context to handle the form state and share it with the inputs */
const FormContext = createContext<any>(null);

/* generic field type to be used by the inputs */
export interface Field<T> {
  label: string;
  name: keyof T;
  fullWidth?: boolean;
}

/* generic form component to be used by the forms */
export interface FormProps<T> {
  register: UseFormRegister<T>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: FieldErrors;
  loading: boolean;
  children: React.ReactNode;
  description?: string;
  image?: string;
}

/* form component, it handles and creates the form context and creates the layout */
export const Form: React.FC<FormProps<any>> & {
  Input: typeof Input;
  Button: typeof SubmitButton;
} = ({ register, handleSubmit, errors, loading, children, image }) => (
  <FormContext.Provider value={{ register, errors, loading }}>
    <Container maxWidth="md">
      <Paper elevation={3}>
        <Box p={3} m={3}>
          <Stack mb={2}>
            <img
              src={image}
              width="100%"
              height="auto"
              alt="Header"
              style={{
                opacity: 0.65,
                zIndex: 10,
                borderRadius: '0.5rem',
              }}
            />
          </Stack>
          <form onSubmit={handleSubmit}>{children}</form>
        </Box>
      </Paper>
    </Container>
  </FormContext.Provider>
);

/* input component, it uses the form context to register the input and show the errors */
export const Input: React.FC<{ field: Field<any> }> = ({ field }) => {
  const { register, errors, loading } = useContext(FormContext);
  return (
    <>
      <TextField
        label={field.label}
        id={field.name as string}
        disabled={loading}
        style={{
          width: '100%',
        }}
        {...register(field.name as string)}
      />
      {errors[field.name as string]?.message && (
        <span
          style={{
            color: 'red',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            marginLeft: '0.5rem',
          }}
        >
          {errors[field.name as string].message as string}
        </span>
      )}
    </>
  );
};

/* submit button component, it uses the form context to show the loading state */
export const SubmitButton: React.FC<{ text: string }> = ({ text }) => {
  const { loading } = useContext(FormContext);
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="flex-start"
      marginTop={3}
      width="100%"
    >
      <Button type="submit" value={text} loading={loading} disabled={loading} />
    </Stack>
  );
};

/* export the form component with the input and submit button components (Form.Input, Form.Button) */
Form.Input = Input;
Form.Button = SubmitButton;
