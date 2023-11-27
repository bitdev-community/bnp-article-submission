import { z } from 'zod';

// Define a schema for the article submission form
export const articleSubmissionScheme = z.object({
  // the name should be a string with more than 1 character
  name: z.string().min(1, 'Name must be at least 1 character long'),
  // the handle should be a string with more than 1 character
  mediumHandle: z
    .string()
    .min(1, 'Medium handle must be at least 1 character long'),
  // the post url has to be a valid URL
  mediumPostUrl: z.string().url('Must be a valid URL'),
});

// Type for article submission
export type ArticleSubmission = z.infer<typeof articleSubmissionScheme>;
