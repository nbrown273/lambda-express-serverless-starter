import express from 'express';

const app = express();

app.get('/', function (req, res) {
  res.send({ message: 'hello world!' })
});

export default app;
