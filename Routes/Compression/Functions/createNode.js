var isBigger = require('./isBigger.js')

function createNode(first,second){
    let _isBigger = isBigger(first,second)
    var node = {}
    if (!_isBigger){
        node._key = first._key + second._key
        node._value =  first._value + second._value
        node._left = first
        node._right = second
        node._code = null
    }

    else{
        node._key = second._key + first._key
        node._value =  second._value + first._value
        node._left = second
        node._right = first
        node._code = null
    }

    return node
}

module.exports = createNode