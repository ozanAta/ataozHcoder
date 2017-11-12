var read = require('./Functions/read.js')
var write = require('./Functions/write.js')
var doesExist = require('./Functions/doesExist.js')
var existingFiles = require('./Functions/existingFiles.js')
var deleteFile = require('./Functions/delete.js')
var fileList = require('./Functions/fileList.js')

var fileOperations = {
    write:write,
    read:read,
    existingFiles: existingFiles,
    fileList: fileList,
    doesExist:doesExist,
    delete: deleteFile
}

module.exports = fileOperations