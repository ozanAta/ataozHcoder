var fs = require('fs')
var formatFileName = require('./formatFileName')

function read(username, fileName){
    let filePath = "./Files/" + username + "/"
    fileName = formatFileName(fileName)
    
    var context = fs.readFileSync(filePath+fileName,'utf8')
    return context.toString()
}

module.exports = read