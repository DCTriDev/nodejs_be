const express = require('express')
const rootRouter = express.Router()
const { menuRoute } = require('./menu_route')
const { categoryRouter } = require('./category_route')
const { userRoute } = require('./user_route')
const { authRouter } = require('./auth_route')
/* 
    localhost:3000/menu
    localhost:3000/menu/:id

    localhost:3000/category/
    localhost:3000/category/:id

    localhost:3000/user/
*/

rootRouter.use('/menu',menuRoute)
rootRouter.use('/category',categoryRouter)
rootRouter.use('/user',userRoute)
rootRouter.use('/auth',authRouter)

module.exports = {
    rootRouter
}