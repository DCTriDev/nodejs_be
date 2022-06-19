const express = require('express')
const categoryRouter = express.Router()
const { getAllCategory, createCategory, updateCategory } = require('../controller/category_controller')

categoryRouter.get('/',getAllCategory)
categoryRouter.post('/',createCategory)
categoryRouter.put('/:id',updateCategory)

module.exports = {
    categoryRouter
} 