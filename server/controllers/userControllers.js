const { User } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

class Controller {
    static register(req, res, next) {
        console.log('masuk kok')
        User.create({
            email: req.body.email,
            password: req.body.password
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({
            where: {email}
        })
        .then(data => {
            if(!data || !(bcrypt.compareSync(password, data.password))) {
                next({ name: 'LoginValidationError'})
            } else {
                const access_token = jwt.sign({ id: data.id, email: data.email }, process.env.secretKey)
                res.status(200).json({ message: 'Login Successful', access_token })
            }
        })
        .catch(err => {
            console.log(err)
            next({ name: 'LoginValidationError' })
        })
    }
}

module.exports = Controller