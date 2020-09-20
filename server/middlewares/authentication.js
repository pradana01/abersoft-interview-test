const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const {User} = require('../models')

const authentication =  (req, res, next) => {
    const {access_token} = req.headers

    try {
        const decoded = jwt.verify(access_token, process.env.secretKey)
        req.userData = decoded

        User.findOne({
            where: {
                email: req.userData.email
            }
        })
        .then(data => {
            console.log('Authenticated')
            next()
        })
        .catch(err => {
            console.log(err)
            next({name: 'LoginValidationError'})
        })
    } catch (error) {
        console.log(error)
        next({name: 'unauthorized'})
    }
}

module.exports = {authentication}