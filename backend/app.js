var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const url ='mongodb://localhost/HomeInn'
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
var app = express();

con.on('open', () =>{
    var date = new Date();
    console.log(date);
    console.log('connected to mongodb...')
})


app.use(express.json())
const propertiesRouter = require('./routes/properties')
app.use('/properties', propertiesRouter)

const reservationRouter = require('./routes/reservations')
app.use('/reservations', reservationRouter)


const userRouter = require('./routes/usersignup')
app.use('/usersignup', userRouter)

const loginRouter = require('./routes/login')
app.use('/login', loginRouter)

const hostsignuprouter = require('./routes/hostsignup')
app.use('/hostsignup', hostsignuprouter)

const searchparamrouter = require('./routes/searchpropertyqueryparam')
app.use('/searchproperty', searchparamrouter)


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;