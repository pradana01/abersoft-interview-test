const route = require('express').Router()
const userController = require('../controllers/userControllers')
// const authentication = require('../middlewares/authentication')

route.post('/register', userController.register)

// route.use(authentication)
route.post('/login', userController.login)

module.exports = route