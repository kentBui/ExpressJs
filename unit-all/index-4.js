// query parameter

const express = require('express');
const bodyParser = require('body-parser')
var app = express();
var port = 3800;
var users = [
		{id: 1, name: 'Kent1'},
		{id: 2, name: 'thinh'},
		{id: 3, name: 'tam'}
		];
app.set('view engine', 'pug');
app.set('views','./views');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res)=>{
	res.render('index-3',{
		name: 'Kent'
	});
});

app.get('/users', (req,res)=>{
	res.render('users/index-3',{
		users: users
	})
});

app.get('/users/search', function(req,res){
	var q = req.query.q;
	var matchedUser = users.filter((user)=>{
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('users/index-3',{
		users: matchedUser,
		query: q
	});
});

app.get('/users/create',(req, res)=>{
	res.render('users/create');
});

app.post('/users/create', (req, res)=>{
	users.push(req.body);
	res.redirect('/users');
});

app.listen(port, ()=>{
	console.log('get data from port:'+port);
});