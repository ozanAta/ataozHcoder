var fs = require('fs')
var formatFileName = require('./formatFileName.js')

function fileList(username){
    let filePath = "./Files/" + username + "/"
    var files = fs.readdirSync(filePath)
    var _fileList = []
    for (file in files){
        _file = files[file]

        fileName = formatFileName(_file)
        let context = fs.readFileSync(filePath+fileName,'utf8')
        let fileObject = JSON.parse(context)
        let fileInfo = {
            name: fileObject.name,
            surname: fileObject.surname,
            sender: fileObject.sender,
            date: fileObject.date,
            filename: fileName
        }
        _fileList.push(fileInfo)
        /* ad soyad gönderen kullanıcı tarih */
    }

    return _fileList
}

module.exports = fileList