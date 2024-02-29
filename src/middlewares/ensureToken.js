const jwt = require('jsonwebtoken')

function ensureToken(req, res, next){
    try{
        const bearerHeader = req.headers['authorization']
        if(bearerHeader !== 'undefined'){
            const splitBearer = bearerHeader.split(' ')
            const bearerToken = splitBearer[1]
            const data = jwt.verify(bearerToken, 'my_secret_key')
            
            req.user = {
                _id:data.id
            }

            next()
        }else{
            res.sendStatus(403)
        }
    }catch(err){
        res.sendStatus(403)
    }
}

module.exports = ensureToken