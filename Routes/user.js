var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var router = express.Router();
var userOperations = require('./UserOperations/userOperations.js')
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

router.post('/create', function(req, res) {
	console.log("Request: Create User")
	var body = req.body;
	if (userOperations.doesExist(body.username))
		return res.status(400).send();

	userOperations.create(body)
	res.status(200).send();
});

router.get('/userList', function(req, res){
	userList = userOperations.getUsers()
	userList_JSON = JSON.stringify(userList)
	res.send(userList_JSON);
})

router.get('/verify/:username/:password', function(req, res) {
	console.log("Request: Verify User")
	let username = req.params.username
	let password = req.params.password
	
	let authentication = userOperations.verify(username,password)
	res.send(authentication);
});

router.get('/restart/:username/:password', function(req, res) {
	console.log("Request: Restart")
	let username = req.params.username
	let password = req.params.password
	
	if (username === "admin" && password === "admin"){
		userOperations.restart()
		res.status(200).send();
	}
	
	else
		res.status(400).send();
});

module.exports = router