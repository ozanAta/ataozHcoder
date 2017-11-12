var create = require('./Functions/create.js')
var verify = require('./Functions/verify.js')
var doesExist = require('./Functions/doesExist.js')
var getUsers = require('./Functions/getUsers.js')
var restart = require('./Functions/restart.js')

var userOperations = {
    create:create,
    verify:verify,
    doesExist:doesExist,
    getUsers:getUsers,
    restart:restart
}

module.exports = userOperations