var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
const log = require('./logs/index');
const logger = require('./logs').logger;
const errorMsg = require('./common');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const menuRouter = require('./routes/menu');
const orgRouter = require('./routes/org');
const expressJwt = require('express-jwt');
const verify = require('./verify/token_verify');

var app = express();

log.use(app);

// view engine setup
/* app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); */

// 允许跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods","*");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//配置token白名单
app.use(expressJwt({
  secret: verify.sign_key
}).unless({
  path: ['/api/login','/api/refresh','/api/register']
}))


//配置api
app.use('/api', indexRouter);
app.use('/api/user', userRouter);
app.use('/api/menu', menuRouter);
app.use('/api/org', orgRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  let message = '';
  switch(err.status){
    case 401: 
      message = 'token已失效'; break;
    case 500:
      message = '服务器内部错误'; break;
    case 503: 
      message = '服务器出错啦'; break;
    default:;
  }
  // render the error page
  res.status(err.status || 500);
  res.json(message);
});

module.exports = app;
