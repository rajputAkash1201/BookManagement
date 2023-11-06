const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const db = require('./config/db');

app.use(bodyParser.json());
app.use('/books', require('./routes/books'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
