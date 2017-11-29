var express = require('express');
var bodyParser = require('body-parser');
var contactRouter = require('../routes/contact.js');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/contacts', contactRouter);



module.exports = app;