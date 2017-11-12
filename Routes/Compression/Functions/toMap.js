function toMap(hashMap){
    map = new Map
    for (key in hashMap){
        map.set(key,hashMap[key])
    }
    return map
}

module.exports = toMap