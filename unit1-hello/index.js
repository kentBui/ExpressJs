var express = require('express');
var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req,res){
	res.render('index',{
		name: 'kent'
	});
});

app.get('/users', function(req,res){
	res.render('users/index', {
		users: [
			{id: 1, name: 'kent1'},
			{id: 2, name: 'kent2'},
			{id: 3, name: 'kent3'}
		]
	});
});

app.listen(port, function(){
	console.log('listen data from port:' + port);
});