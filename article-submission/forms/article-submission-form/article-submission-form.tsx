import {
  ArticleSubmission,
  articleSubmissionScheme,
} from '@bits-and-pieces/article-submission.entities.article-submission-scheme';
import { Field, Form } from '@bits-and-pieces/design.patterns.form';
import { SuccessMessage } from '@bits-and-pieces/design.ui.actions.success-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import HeaderImage from './bnp-logo.png';

/* helper function to create the field, for type inference */
function createField(
  field: Field<ArticleSubmission>
): Field<ArticleSubmission> {
  return field;
}

/* resolver to validate the form */
const resolver = zodResolver(articleSubmissionScheme);

const ENDPOINT_URL =
  'https://jyhjzcawzn5ivr7qbo3hbxrhii0bqxux.lambda-url.us-east-1.on.aws/';

/* form component, it handles and creates the form context and creates the layout */
export function ArticleSubmissionForm() {
  const [submitError, setSubmitError] = useState<Error | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ArticleSubmission>({
    /* the resolver will validate the inputs with Zod */
    resolver,
  });

  const onSubmit: SubmitHandler<ArticleSubmission> = async (data) => {
    setSubmitSuccess(false);
    setSubmitError(null);
    setLoading(true);

    try {
      await fetch(ENDPOINT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {submitError && (
        <div
          style={{
            width: '50%',
            margin: 'auto',
          }}
        >
          <p>
            There was an error submitting your article. Please try again later.
          </p>
        </div>
      )}
      {submitSuccess ? (
        <div
          style={{
            width: '50%',
            margin: 'auto',
          }}
        >
          <SuccessMessage title="Article Submitted!">
            Thank you for submitting your article. We will review it and get
            back to you as soon as possible.
          </SuccessMessage>
        </div>
      ) : (
        <Form
          register={register}
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
          loading={loading}
          image={HeaderImage}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Form.Input
                field={createField({
                  label: 'Name',
                  name: 'name',
                  fullWidth: true,
                })}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Form.Input
                field={createField({
                  label: 'Medium Handle',
                  name: 'mediumHandle',
                  fullWidth: true,
                })}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              mt: 2,
            }}
          >
            <Form.Input
              field={createField({
                label: 'Medium Post URL',
                name: 'mediumPostUrl',
                fullWidth: true,
              })}
            />
          </Grid>
          <Form.Button text="Submit Article" />
        </Form>
      )}
    </div>
  );
}
