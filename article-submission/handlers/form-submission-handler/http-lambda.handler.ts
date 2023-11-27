import { Handler } from 'aws-lambda';
import {
  ArticleSubmission,
  articleSubmissionScheme,
} from '@bits-and-pieces/article-submission.entities.article-submission-scheme';

const API_KEY = process.env.TOKEN_AIRTABLE;

/**
 * Parse the body of the request, if it's a string, parse it as JSON
 */
function maybeParse(
  body: string | Partial<ArticleSubmission>
): Partial<ArticleSubmission> {
  if (typeof body === 'string') {
    return JSON.parse(body) as Partial<ArticleSubmission>;
  }
  return body;
}

export const handler: Handler = async (event) => {
  console.log(JSON.stringify(event, null, 2));
  try {
    const isV2 = event.requestContext?.http;
    const method = isV2
      ? event.requestContext.http.method
      : event.requestContext.httpMethod;

    if (method === 'OPTIONS') {
      return {
        statusCode: 204,
        body: '',
      };
    }

    if (!API_KEY) {
      return {
        statusCode: 500,
        body: {
          error: 'API_KEY is not defined',
        },
      };
    }

    if (method === 'GET') {
      return {
        statusCode: 200,
        body: {
          message: 'Bit submission form',
        },
      };
    }

    if (method !== 'POST') {
      return {
        body: {
          error: `Only GET and POST methods are supported, you tried: ${method}`,
        },
        statusCode: 405,
      };
    }

    const body = maybeParse(event.body);

    // get the fields from the request body
    if (!body) {
      return {
        statusCode: 400,
        body: {
          error: 'Missing request body',
        },
      };
    }

    // Validate the request body
    try {
      articleSubmissionScheme.parse(body);
    } catch (err) {
      return {
        statusCode: 400,
        body: {
          error: err.message,
        },
      };
    }

    const { name, mediumHandle, mediumPostUrl } = body;

    // Form handler implementation, we use `await import` to get the type definitions
    const { default: Airtable } = await import('airtable');

    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: API_KEY,
    });

    const base = Airtable.base('appc2WzNl9UwIALHK');

    const table = base.table('Table 1');

    try {
      await table.create([
        {
          fields: {
            Name: name,
            MediumHandle: mediumHandle,
            MediumPostUrl: mediumPostUrl,
            SubmissionDate: new Date().toISOString(),
          },
        },
      ]);

      return {
        statusCode: 200,
        body: {
          message: 'Successfully submitted the form',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      };
    } catch (err) {
      console.log(`Error: ${err}`);
      return {
        statusCode: 500,
        body: {
          error: err.errorMessage,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }
  } catch (err) {
    console.log(`Error: ${err}`);
    return {
      statusCode: 500,
      body: {
        error: err.errorMessage,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
};
