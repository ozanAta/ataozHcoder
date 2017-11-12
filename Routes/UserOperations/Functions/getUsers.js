var fs = require('fs')

function getUsers(){
    let filePath = "./Files/UserList.txt"
    var usersJSON = fs.readFileSync(filePath, 'utf-8')
    var users = []
    
    if(usersJSON.length > 0)
        users = JSON.parse(usersJSON)
    
    var userList = []
    users.forEach(function(user){
        if (user.username !== "admin"){
            let _user = {
                name: user.name,
                surname: user.surname,
                username: user.username,
                profilePicture: user.profilePicture
            }
            userList.push(_user)
        }
    });
    
    return userList
}

module.exports = getUsers