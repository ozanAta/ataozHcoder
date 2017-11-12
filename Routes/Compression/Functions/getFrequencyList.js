var compareCharacter = require('./compareCharacter.js')

function getFrequencyList(frequencyMap){
    var list = []
    frequencyMap.forEach(function(value, key){
        let character = {
            _key: key,
            _value: value,
            _left: null,
            _right: null
        }
        list.push(character)
    })
    list.sort(compareCharacter)
    return list
}



module.exports = getFrequencyList