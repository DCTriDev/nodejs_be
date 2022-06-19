const { sequelize } = require('../config/db_connect')
const initmodels = require('../models/init-models')
var models = initmodels(sequelize)

const getAllUser = async (req,resp) => {
    const data = await models.users.findAll()
    resp.send(data)
}

/* 
    Logger: Kibana ElecticSearch
*/
const insertUser = async (req,resp) => {
    try{
        const users = await models.users.create(req.body)
        resp.status(201).send(users)
    }catch(error){
        // Lỗi khi không kết nối được database , hoặc thông tin user
        resp.status(500).send(error)
    }   
}

//clean code book
// JWT
const getUserById = async (req,resp) => {
    try{
        const { id } = req.params
        const users = await models.users.findOne({
            where: {
                id
            }
        })
        if(null == users){
            resp.status(200).send('User not found')
        }else{
            resp.status(200).send(users)
        }
    }catch(error){
        resp.status(500).send(error)
    }
}

module.exports = {
    getAllUser,
    insertUser,
    getUserById
}

/* 
    Tạo ra một link nhập vào thông tin user thì insert user mới database
    tạo ra một link nhận vào ID user. Lấy đúng user có ID mà người dùng truyền vào
*/