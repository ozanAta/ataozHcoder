function serverStatus(req, res){
    res.status(204).send();
}

function listenerStatus(PORT){
    console.log(`
    * * * * * * * * * * * * * * * * * * *
    *    COMPUTER PROJECT - HOMEWORK 2  *
    *    -----------------------------  *
    *    Güllü Katık     150130109      *
    *    Güneş Yurdakul  150140141      *
    *    Ozan Ata        150130039      *
    * * * * * * * * * * * * * * * * * * *
    `)
    console.log('Express listening port ' + PORT + '!');
}

var server = {
    serverStatus: serverStatus,
    listenerStatus: listenerStatus
}

module.exports = server