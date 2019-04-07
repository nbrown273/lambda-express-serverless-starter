import express from 'express';

const app = express();

app.post('/savetos3', function (req, res) {
  res.send('save to S3!')
});

app.post('/getfroms3', function (req, res) {
  res.send('get from s3!')
});

export default app;
