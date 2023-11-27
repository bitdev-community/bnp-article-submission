/** @type {import("@bits-and-pieces/dev.app-types.lambda-app-type").LambdaAppOptions} */
module.exports.default = {
  /* the app's name (for Bit) */
  name: 'http-lambda',
  /* an entry point for the app's build */
  entry: require.resolve('./http-lambda.handler'),
  /* your aws host config and credentials */
  deployOptions: {
    clientConfig: {
      /* the hosting region */
      region: 'us-east-1',
      /* your aws credentials */
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    },
    /* the lambda's name (for aws). Using an already used name will update the code. */
    functionName: 'article-submission',
    /* the runtime execution environment */
    runtime: 'nodejs18.x',
    /* a description for your lambda (will be displayed on the aws console) */
    description: 'Deployed from Bit',
    /* the name of the method within your code that Lambda calls to execute your function */
    handlerName: 'handler',
    /* lambda endpoint url configurations.  */
    urlOptions: {
      authType: 'NONE',
      invokeMode: 'BUFFERED',
      cors: {
        allowOrigins: ['*'],
        allowMethods: ['*'],
        allowHeaders: ['*'],
      },
    },
    environment: {
      TOKEN_AIRTABLE: process.env.TOKEN_AIRTABLE,
    },
  },
  /* the port range for running the app (lambda) in development (bit run) */
  portRange: [4000, 5000],
};
