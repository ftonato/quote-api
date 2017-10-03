const express    = require('express');
const firebase   = require("firebase");
const bodyParser = require('body-parser');
const db         = require('./app/config/db.json');
const app        = express();

const port  = 8000;
const dbUrl = db.databaseURL;

app.use(bodyParser.urlencoded({ extended: true }));

// firebase setup
firebase.initializeApp({
  databaseURL: dbUrl,
  serviceAccount: db
});
const database = firebase.database();

require('./app/routes')(app, database);

app.listen(port, () => {
  console.log('We are live on ' + port);
});
