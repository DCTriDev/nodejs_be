const express = require('express')
const menuRoute = express.Router()
const { getAllMenu , getDetailMenu } = require('../controller/menu_controller')

menuRoute.get('/',getAllMenu)
menuRoute.get('/:id',getDetailMenu)

module.exports = {
    menuRoute
}

/* 
    localhost:3000/api/v1/category/ => GET get all category
    localhost:3000/api/v1/category/ => POST create new data category
    localhost:3000/api/v1/category/1 => PUT update category
*/
