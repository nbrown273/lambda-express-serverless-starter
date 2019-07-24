import express from 'express';
import cors from 'cors'
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/form', function (req, res) {
  const contents = fs.readFileSync(`./public/index.html`);
  res.send(contents.toString())
});

app.get('/', function (req, res) {
  res.send({ message: 'hello world!' })});

export default app;
