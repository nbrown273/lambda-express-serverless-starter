import app from '../src/app';
import supertest from 'supertest';

const request = supertest(app);

test('savetos3', async () => {
  const response = await request.post('/savetos3');
  expect(response.statusCode).toEqual(200);
  expect(response.text).toEqual('save to S3!');
});

test('getfroms3', async () => {
  const response = await request.post('/getfroms3');
  expect(response.statusCode).toEqual(200);
  expect(response.text).toEqual('get from s3!');
});

