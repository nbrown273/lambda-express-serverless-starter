import express from 'express';
import cors from 'cors'
import shortid from 'shortid';
import uuidv4 from 'uuid/v4';
import generator from 'generate-password';
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/', function (req, res) {
  const contents = fs.readFileSync(`./public/index.html`);
  res.send(contents.toString())
});

app.get('/shortid', function (req, res) {
  res.send(shortid.generate());
});

app.get('/uuid', function (req, res) {
  res.send(uuidv4())
});

app.get('/password', function (req, res) {
  res.send(generator.generate({
    length: 10,
    numbers: true
  }))
});

export default app;
