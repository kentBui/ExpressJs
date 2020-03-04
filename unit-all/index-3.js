// query parameter

const express = require('express');
var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', (req, res)=>{
	res.render('index-3',{
		name: 'Kent'
	});
});

app.get('/users', (req,res)=>{
	res.render('users/index-3',{
		users: [
		{id: 1, name: 'Kent1'},
		{id: 2, name: 'thinh'},
		{id: 3, name: 'tam'}
		]
	})
});

app.listen(port, ()=>{
	console.log('get data from port:'+port);
});
