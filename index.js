var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var sender = require('./Routes/sender.js');
var receiver = require('./Routes/receiver.js');
var user = require('./Routes/user.js');
var server = require('./Server/status.js');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/sender', sender);
app.use('/receiver', receiver);
app.use('/user', user);

app.get('/', function(req, res){
    res.status(204).send();
});
app.listen(PORT, server.listenerStatus(PORT));