import { isNil } from 'ramda';
const AWS = require('aws-sdk');

export const ddb = isNil(process.env.AWS_EXECUTION_ENV)
  ? new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  })
  : new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
  });
