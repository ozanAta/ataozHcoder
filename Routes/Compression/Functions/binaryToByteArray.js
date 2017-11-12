function binaryToByteArray(encoded){
    var zipped = []
    while (encoded.length >= 8){
        let x = encoded.substr(0,8)
        var byte = parseInt(x,2)
        if (x[0] === "1")
            byte = 0 - (256 - parseInt(x,2))
        
        zipped.push(byte)
        encoded = encoded.substr(8,encoded.length)
    }
    if (encoded.length !== 0){
        while(encoded.length < 8){
            encoded = encoded + "0" 
        }
        zipped.push(parseInt(encoded,2))
    }
    
    return zipped
}

module.exports = binaryToByteArray