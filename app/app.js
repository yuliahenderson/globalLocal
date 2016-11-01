const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const curratorRouter = require('./routes/curratorRouter');
const destinationRouter = require('./routes/destinationRouter');
const authRouter = require('./routes/authRouter');
const authentication = require('./middleware/authentication');
const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: true,
  saveUninitialized: true,
}));

app.use(morgan('dev'));

app.use('/api', authentication);
app.use('/api', authRouter);
app.use('/api/currators', curratorRouter);
app.use('/api/destinations', destinationRouter);


module.exports = app;
