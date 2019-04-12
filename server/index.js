const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));

app.use(express.bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
