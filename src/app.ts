import express from 'express';

const app = express();

app.get('/form', function (req, res) {
  const contents = fs.readFileSync(`./public/index1.html`);
  res.send(contents.toString())
});

app.get('/', function (req, res) {
  res.send({ message: 'hello world!' })
});

export default app;
