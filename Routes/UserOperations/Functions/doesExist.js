var fs = require('fs')

function doesExist(username){
    let filePath = "./Files/"
    var usersJSON = fs.readFileSync(filePath + "UserList.txt", 'utf-8')
    var users = []
    
    if(usersJSON.length > 0)
        users = JSON.parse(usersJSON)
    
    var authentication = false
    users.forEach(function(user){
        if(user.username === username){
            authentication = true
        }
    });
    
    return authentication
}

module.exports = doesExist