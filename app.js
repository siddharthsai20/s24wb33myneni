var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gridRouter = require('./routes/grid');
var indexRouter = require('./routes/index');
var conferenceRouter = require('./routes/conference');
<<<<<<< HEAD
var pickRouter = require('./routes/pick');
=======
>>>>>>> a3b2531eae19465a595c39a0e43c7d3d582120b0

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/index', indexRouter);
app.use('/conference', conferenceRouter);
app.use('/grid', gridRouter);
<<<<<<< HEAD
app.use('/pick', pickRouter);
=======
>>>>>>> a3b2531eae19465a595c39a0e43c7d3d582120b0

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
