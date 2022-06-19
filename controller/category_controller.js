
const {categoryData} = require('../constant')

const getAllCategory = (req,resp) => {
    resp.status(200).send(categoryData)
}

const createCategory = (req,resp) => {
    const newCategories = [...categoryData,req.body]
    resp.status(200).send(newCategories)
}

const updateCategory = (req,resp) => {
    const idCategory = req.params.id
    const updateCategory = req.body
    const index = categoryData.findIndex((data)=> data.id === Number(idCategory))
    categoryData[index] = updateCategory

    resp.status(200).send(categoryData)
}

module.exports = {
    getAllCategory,
    createCategory,
    updateCategory
}