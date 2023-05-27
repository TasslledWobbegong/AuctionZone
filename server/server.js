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

// Catch-all error handler IF WE HAD ONE!


// Global error handler:
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown router error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
