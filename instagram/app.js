// require
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressSession = require('express-session');

var home = require('./controllers/home');
var profile = require('./controllers/profile');


var port = process.env.PORT || 80;
// configure
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret: 'secret', resave: false, saveUninitialized:true}));
// routes
app.get('/', function(req, res){
    res.redirect('/home');
});

app.use(express.static(__dirname + '/public'));
app.use(profile);
app.use(home);

// server
app.listen(port, function(){
    console.log('Server started at ' + port + ' port....');
});



//this is changed by shuvro