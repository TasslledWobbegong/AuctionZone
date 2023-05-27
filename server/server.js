// AUCTION ZONE!
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const Item = require('./models/itemModel.js');
const path = require('path');
const apiRouter = require('./routes/api');


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle requests for static files
app.use(express.static(path.resolve(__dirname, '../client')));

// route handlers
app.use('/api', apiRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
