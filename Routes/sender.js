var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var router = express.Router();
var compression = require('./Compression/compression.js')
var fileOperations = require('./FileOperations/fileOperations.js')
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

router.get('/isValid/:receiver/:fileName', function (req, res){
	console.log("Request: Check File Name Availability")
	let receiver = req.params.receiver
	let fileName = req.params.fileName;
	if (fileOperations.doesExist(receiver, fileName))
		return res.send(false)
	
	res.send(true)
})

router.post('/zipped', function (req, res) {
	console.log("Request: Send Zipped File")
	let body = req.body;
	let receiver = body.receiver
	let fileName = body.fileName;
	let sourceText = body.sourceText;
	var zipped = body.zipped
	var frequencyMap = body.frequencies
	var bitSize = 0

	fileOperations.write(receiver,fileName, body)

	if(sourceText === ""){
		let frequencyMap = compression.toMap(body.frequencies)
		let _frequencyList = compression.getFrequencyList(frequencyMap)
		
		var text = ""
		for (i in zipped){
			text = text + compression.byteTo2(zipped[i])
		}
	
		body.sourceText = compression.decode(_frequencyList,text, body.bitSize)
		body.zipped = []
		fileOperations.write(receiver,fileName + "unzipped", body)
	} else {
		let encoded = compression.encode(sourceText)
		body.zipped = compression.binaryToByteArray(encoded)
		body.bitSize = encoded.length
		var freq = {}
		compression.findFrequencies(body.sourceText).forEach(function(value,key){
			freq[key] = value
		})
		body.frequencies = freq
		body.sourceText = ""
		fileOperations.write(receiver,fileName + "zipped", body)
	}

	res.status(200).send();
});

module.exports = router;