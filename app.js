/*
 * @Author: croy 
 * @Date: 2023-03-20 16:24:34
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-20 16:58:12
 * @FilePath: /xc-admin/serve/express/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const login = require('./routes/login');
const usersRouter = require('./routes/users');
const components = require('./routes/components');
const JWT = require('./util/jwt')
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/components',components)

app.use((res,req,next)=>{
  if(res.url == "/login"){
    next();
    return
  }
  let token = req.headers['authorization'].split('')[1]
  if(token){
    if(JWT.verify(token)){
      const newToken = JWT.generate(JWT.verify(token),'1000s')
      res.headers('Authorization', newToken)
      next()
    }else{
      res.status(401).json({
        errCode:'-1',
        errInfo:'token 过期'
      })
    }
  }
})

app.use('/login',login);

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
