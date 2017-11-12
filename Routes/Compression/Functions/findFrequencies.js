function findFrequencies(text){
    /* 
     * Javascript object is a real hashmap on its implementation 
     */
    var frequencyMap = new Map
    for (var i = 0; i < text.length; i++){
        let character = text[i]
        
        if (frequencyMap.get(character) === undefined)
            frequencyMap.set(character,0)

        let value = frequencyMap.get(character)
        frequencyMap.set(character,value+1)
    }
    return frequencyMap
}

module.exports = findFrequencies