var LUT = []

function recursive(node) {
    if (node._left && node._right){
        recursive(node._left)
        recursive(node._right)
    }
    else
        LUT[node._key] = node._code
}

function generateLUT(node) {
    recursive(node)
    return LUT
}

module.exports = generateLUT