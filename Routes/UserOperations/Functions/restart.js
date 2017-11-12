var fs = require('fs')

function restart(){
    let filePath = "./Files/"
    var files = fs.readdirSync(filePath)
    
    for(var file in files){
        let folder = files[file]
        if (folder !== "admin" && folder !== "UserList.txt"){
            var _files = fs.readdirSync(filePath + folder + "/")
            for (_file in _files){
                let _fileName = _files[_file]
                fs.unlinkSync(filePath+folder + "/" + _fileName)    
            }
            fs.rmdirSync(filePath+folder+"/")
        }
    }

    let admin = {
        username:"admin",
        password:"admin"
    }

    var users = []
    users.push(admin)
    let users_JSON = JSON.stringify(users)
    fs.writeFileSync(filePath + "UserList.txt", users_JSON)
}

module.exports = restart