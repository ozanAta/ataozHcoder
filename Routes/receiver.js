var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var router = express.Router();
var fileOperations = require('./FileOperations/fileOperations.js')
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

router.get('/fileList/:username', function(req, res) {
	console.log("Request: Get List of Available Files")
	let username = req.params.username
	let availableFiles = JSON.stringify(fileOperations.fileList(username))
	res.send(availableFiles)
});

router.get('/:username/:fileName', function(req, res) {
	console.log("Request: A Specific File")
	let username = req.params.username
	let fileName = req.params.fileName

	let file = fileOperations.read(username,fileName)
	res.send(file)
});

module.exports = router;