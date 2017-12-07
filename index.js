const express    = require('express');
const formidable = require('formidable');
const seesion    = require('express-seesion');
const parseurl   = require('parseurl');
const fs         = require('fs');

var app = express();

app.disable('x-powered-by');

const handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(require('body-parser').urlencoded({extended:true}));

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('home');
});

// error 404 -- page not found
app.use(function(req, res) {
  res.type('text/html');
  res.status(404);
  res.render('404');
});

// error 500 -- server error
app.use(function(req, res) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  console.log("Express started");
})
