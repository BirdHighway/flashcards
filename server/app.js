const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');

app.use(logger);
app.use(express.static('public'));

const port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
