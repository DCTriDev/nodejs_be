const express = require('express')
const userRoute = express.Router()
const { getAllUser, insertUser, getUserById  } = require('../controller/user_controller')
const {checkAuthen} = require('../controller/auth_controller')

userRoute.get('/',checkAuthen, getAllUser)
userRoute.post('/',checkAuthen, insertUser)
userRoute.get('/:id',checkAuthen, getUserById)

module.exports = {
    userRoute
}
