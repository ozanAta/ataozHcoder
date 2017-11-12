var toMap = require('./Functions/toMap.js')
var buildTree = require('./Functions/buildTree.js')
var assignCode = require('./Functions/assignCode.js')
var generateLut = require('./Functions/generateLUT.js')
var findFrequencies = require('./Functions/findFrequencies.js')
var getFrequencyList = require('./Functions/getFrequencyList.js')
var byteTo2 = require('./Functions/byteTo2.js')
var binaryToByteArray = require('./Functions/binaryToByteArray.js')

function decode(frequencyList, text, bitSize) {
    let root = buildTree(frequencyList)

    var node = root
    var newText = ""
    for (var i = 0; i <= bitSize; i++) {
        let character = text[i]
        if (node._left && node._right) {
            if (character === '0')
                node = node._left
            else if (character === '1')
                node = node._right
        }
        else {
            newText += node._key
            node = root
            i -= 1;
        }
    }
    return newText
}

function encode(text) {
    let frequencyMap = findFrequencies(text)
    let frequencyList = getFrequencyList(frequencyMap)
    var root = buildTree(frequencyList)

    assignCode(root, "")
    let LUT = generateLut(root)

    var newText = ""
    for (var i in text) {
        let character = text[i]
        newText += LUT[character]
    }
    return newText
}

var compression = {
    encode: encode,
    decode: decode,
    toMap: toMap,
    byteTo2, byteTo2,
    binaryToByteArray, binaryToByteArray,
    getFrequencyList: getFrequencyList,
    findFrequencies: findFrequencies
}

// var fs = require('fs')

// let file = JSON.parse(fs.readFileSync('./text.txt','utf-8'))
// let frequencyMap = compression.toMap(file.frequencies)
// let frequencyList = compression.getFrequencyList(frequencyMap)
// let zipped = file.zipped
// var text = ""
// for (i in zipped){
//     text = text + compression.byteTo2(zipped[i])
// }
// text = text.substr(8,text.length)
// console.log(text)
// let decoded = decode(frequencyList,text)
// console.log(decoded)

// let compressed = encode("naber canim hayat nasil")
// console.log(compressed)
// console.log(text)
// var x = compression.findFrequencies("naber canım hayat nasıl")
// var y = compression.getFrequencyList(x)
// var z = decode(y,compressed)
// //console.log(decoded)
// console.log(z)



module.exports = compression