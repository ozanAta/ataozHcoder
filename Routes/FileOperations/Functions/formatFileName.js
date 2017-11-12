function formatFileName(fileName){
    if (fileName.indexOf(".txt") <= -1)
        fileName = fileName + ".txt"
    
    return fileName
}

module.exports = formatFileName