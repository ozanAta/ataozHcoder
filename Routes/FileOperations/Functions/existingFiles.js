var fs = require('fs')

function existingFiles(username){
    let filePath = "./Files/" + username + "/"
    var files = fs.readdirSync(filePath)

    return files
}

module.exports = existingFiles