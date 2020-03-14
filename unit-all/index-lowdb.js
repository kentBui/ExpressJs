var express = require('express');
var bodyParser = require('body-parser');

var routerUser = require('./routers/user.router');
var app = express();
var port = 3000;

var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
	res.render('index',{
		name: 'Kent'
	});
});

app.use('/users', routerUser);

app.listen(port,()=>{
	console.log('get data from :'+port);
})