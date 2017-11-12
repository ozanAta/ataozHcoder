var fs = require('fs')
var formatFileName = require('./formatFileName.js')

function write(username,fileName, content){
    let filePath = "./Files/" + username + "/"
    let content_JSON = JSON.stringify(content)
    fileName = formatFileName(fileName)
    
    /*var fileObject = {
        name:fileName,
        content:content
    }

    var fileObject_JSON = JSON.stringify(fileObject) */
    fs.writeFileSync(filePath + fileName, content_JSON)
}

module.exports = write