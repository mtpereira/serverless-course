'use strict';

const AWS = require('aws-sdk')

const tableName = process.env.DDB_TABLE
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports.handler = (event, context, callback) => {
  console.log(JSON.stringify(event));

  const slug = event.pathParameters.slug;

  docClient.get({
    TableName: tableName,
    Key: {
      slug: slug
    }
  }).promise().then(data => {
    if (data.Item) {
      callback(
        null,
        {
          statusCode: 302,
          body: data.Item.long_url,
          headers: {
            'Location': data.Item.long_url,
            'Content-Type': 'text/plain'
          }
        })
    } else {
      callback(
        null,
        {
          statusCode: 404,
          body: "This shortened link doesn't exsit, check that you've entered it right.",
          headers: {
            'Content-Type': 'text/plain'
          }
        }
      )
    }
  }).catch(err => {
    console.log(data)
    callback(err)
  })
}
