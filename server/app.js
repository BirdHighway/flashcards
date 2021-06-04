require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const randomizeArray = require('./lib/randomize.js');
const client = require('./database/connect.js');

app.use(logger);
app.use(express.static('public'));

app.get('/api/flashcards', (req, res) => {
  const isRandom = req.query && req.query.random && req.query.random === 'true';
  client.query('SELECT * FROM flashcards', (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    if (isRandom) {
      randomizeArray(results.rows);
    }

    res.json(results.rows);
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
