let x = -105
function byteTo2(number){
    if(number < 0){
        number = 256+number
    }

    var x = parseInt(number,10).toString(2)    
    while(x.length < 8){
        x = "0" + x
    }
    return x
}

module.exports = byteTo2