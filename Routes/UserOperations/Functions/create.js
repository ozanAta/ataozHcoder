var fs = require('fs')
var doesExist = require('./doesExist')

function create(userObject){
    let filePath = "./Files/"
    
    let username = userObject.username
    
    fs.mkdirSync(filePath+username)

    var usersJSON = fs.readFileSync(filePath + "UserList.txt", 'utf-8')
    var users = []

    if(usersJSON.length > 0)
        users = JSON.parse(usersJSON)

    users.push(userObject)

    let userList_JSON = JSON.stringify(users)
    fs.writeFileSync(filePath + "UserList.txt", userList_JSON)
    
}

module.exports = create