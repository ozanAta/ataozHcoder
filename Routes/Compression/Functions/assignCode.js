function assignCode(node,code){
    if (node._left && node._right)
        assignCode(node._left,code + "0")
    
    node._code = code
    if (node._right)
        assignCode(node._right,code + "1")
}

module.exports = assignCode