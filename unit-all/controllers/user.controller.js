var shortid = require('shortid');

var db = require('../db');

module.exports = {
	index: (req, res)=>{
							res.render('users/index-3',{users: db.get('users').value()});
						},
	search: (req, res)=>{
							var q = req.query.q;
							var matchedUsers = db.get('users').value().filter((user)=>{
								return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
							});
							res.render('users/index-3', {users: matchedUsers});
						},
	create: (req, res)=>{
							res.render('users/create');
						},
	view:  (req, res)=>{
							var id = req.params.id;
							var user = db.get('users').find({id: id}).value();
							res.render('users/view', {user: user});
						},
	postCreate: (req, res)=>{
								req.body.id = shortid.generate();
								db.get('users').push(req.body)
									.write();
								res.redirect('/users');
							},
	delete: (req, res)=>{
							res.render('users/delete');
						},
	postDelete: (req, res)=>{
								var name = req.body.name;
								console.log(name);
								db.get('users').remove({name: name}).write();
							}
};