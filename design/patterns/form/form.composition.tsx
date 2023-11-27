import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Field, Form } from './form';

interface FormData {
  name: string;
  mediumHandle: string;
  mediumPostUrl: string;
  submissionDate: string;
}

const fields: Field<FormData>[] = [
  {
    label: 'Name',
    name: 'name',
  },
  {
    label: 'Medium Handle',
    name: 'mediumHandle',
  },
  {
    label: 'Medium Post URL',
    name: 'mediumPostUrl',
  },
  {
    label: 'Submission Date',
    name: 'submissionDate',
    fullWidth: true,
  },
];

export const BasicForm = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);
    console.log('Form Data:', data);
    setLoading(false);
  };

  return (
    <Form
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
      loading={loading}
    >
      {fields.map((field) => (
        <Form.Input key={field.name} field={field} />
      ))}
      <Form.Button text="Submit" />
    </Form>
  );
};
