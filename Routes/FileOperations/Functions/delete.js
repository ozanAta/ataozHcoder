var fs = require('fs')

function deleteFile(filename){
    let filePath = "./Files/"
    fs.unlinkSync(filePath+filename)
}

module.exports = deleteFile