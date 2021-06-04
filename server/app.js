require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');

const client = require('./database/connect.js');

const res = client.query('SELECT * FROM flashcards', (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res.rows);
});

app.use(logger);
app.use(express.static('public'));

const port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
