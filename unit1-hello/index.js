var express = require('express');
var app = express();// tra ve app
var port = 3000; // define port 
app.get('/users',(request, response)=>{
	response.send('<h1>Hello world</h1>');// thực tế sẽ lấy dữ liệu từ database rồi render()
});// tạo method get để lấy dữ liệu từ host có port = port với end point trong ''
app.listen(port, ()=>{
	console.log('Get data form port: '+port);
}); // method để lắng nghe 
// this is Hello world example