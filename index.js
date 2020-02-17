const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const path = require('path');
const bodyparser = require('body-parser');
const request = require('request');
const cookieParser = require('cookie-parser');
const routes = require('./routes/');

app.use(express.static('public')); 
app.use(bodyparser.urlencoded({extended: true}));
app.use(cookieParser()); 

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use(favicon(path.join(__dirname,'public','images','favicon.png')));
app.use('/', routes);

//app.set('port', process.env.PORT);
app.set('port', 3000);
app.listen(app.get('port'));