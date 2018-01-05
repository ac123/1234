//loading up various modules that the web server uses
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//load passport
const passport = require('passport');
//Strategy constructor from Passport-Local which is an approach for connecting Express to auth setup.
const localStrategy = require('passport-local').Strategy;

//what to run when a user requests a page (general)
const index = require('./routes/index');
const api = require('./routes/api/index');
const users = require('./routes/api/users');
// const users = require('./routes/users');

//create app instance
const app = express();
//connect mongoose
mongoose.connect('mongodb://localhost/musiclist');

// where to look for views and view engine type
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'phish is the best',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

//these tell the app which route files to use for which url paths (previous lines index and users)
///one can handle multiple paths. multiple users /users/*

app.use('/', index);
app.use('/api', api);
app.use('/api/users', users);
//Configure Passport
const User = require('./models/users/user');
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use('/users', users);

// catch 404 and forward to error handler
//these are called middleware. functionality that happens in the middle of the request. before delivered to code
//must be below requests above since no routes worked -> use this
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
