'use strict';

module.exports.handler = (event, context, callback) => {
  const slug = event.pathParameters.slug;
  const target = process.env['URL_' + slug.toUpperCase()] || 'https://serverless.com/framework/docs/';
  console.log(JSON.stringify(event));
  callback(
    null,
    {
      statusCode: 302,
      body: target,
      headers: {
        'Location': target,
        'Content-Type': 'text/plain',
      }
    }
  );
}
