var createNode = require('./createNode.js')
var compareCharacter = require('./compareCharacter.js')


function buildTree(frequencyList) {

    var isCompleted = false
    while (!isCompleted){
        var first = frequencyList[0]
        var second = frequencyList[1]
        var node = createNode(first,second)
        
        frequencyList.splice(0,2)
        frequencyList.push(node)
        frequencyList = frequencyList.sort(compareCharacter)

        if (frequencyList.length === 1)
            isCompleted = true
    }
    return frequencyList[0]
}

module.exports = buildTree