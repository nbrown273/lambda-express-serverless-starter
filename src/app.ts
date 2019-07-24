import express from 'express';
import cors from 'cors'
import shortid from 'shortid';
import uuidv4 from 'uuid/v4';
import generator from 'generate-password';

const app = express();
app.use(cors());

app.get('/', function (req, res) {
  res.send({message: 'hello world'});
});

app.get('/shortid', function (req, res) {
  res.send({shortid: shortid.generate()});
});

app.get('/uuid', function (req, res) {
  res.send({uuid: uuidv4()})
});

app.get('/password', function (req, res) {
  res.send({password: generator.generate({
    length: 10,
    numbers: true
  })})
});

export default app;
