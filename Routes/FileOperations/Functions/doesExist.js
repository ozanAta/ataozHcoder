var existingFiles = require('./existingFiles')
var formatFileName = require('./formatFileName')

function doesExist(username, fileName){
    files = existingFiles(username)
    fileName = formatFileName(fileName)

    if (files.indexOf(fileName) > -1)
        return true
    
    return false
}

module.exports = doesExist