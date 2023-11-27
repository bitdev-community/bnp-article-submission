const { Netlify } = require('@teambit/cloud-providers.deployers.netlify');

/** @type {import("@teambit/cloud-providers.deployers.netlify").NetlifyOptions} */
const netlify = {
  skipDeployment: process.env.SKIP_DEPLOYMENT,
  accessToken: process.env.NETLIFY_AUTH_TOKEN,
  productionSiteName: 'article-submission',
  team: 'teambit',
};

/** @type {import("@teambit/react.apps.react-app-types").ReactAppOptions} */
module.exports.default = {
  name: 'article-submission-app',
  entry: [require.resolve('./article-submission-app.app-root')],
  deploy: Netlify.deploy(netlify),
};
