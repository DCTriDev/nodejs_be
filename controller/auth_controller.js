const bcrypt = require('bcryptjs')
const { sequelize } = require('../config/db_connect')
const initmodels = require('../models/init-models')
const { generateToken, decodeToken } = require('../hepler/jwt.helper')

const models = initmodels(sequelize)

const signIn = async (req,resp) => {
    const { user_name, user_password} = req.body

    const user = await models.users.findOne({
        where: {
            user_name
        },
        // attributes: []
    })

    if(user != null){
        //Đăng nhập thành công
        const isSuccess = bcrypt.compareSync(user_password,user.user_password)

        if(isSuccess){
            //Generate token
            const token = generateToken(user)

            resp.status(200).send({message: 'Đăng nhập thành công', status_code: 200, success: true, access_token: token})
        }else{
            resp.status(401).send({message: 'Vui lòng kiểm tra lại mật khẩu', status_code: 401, success: false})
        }
    }else{
        //Đăng nhập thất bại
        resp.status(401).send({message: 'Vui lòng nhập lại tài khoản', status_code: 401, success: false})
    }

}

const signUp = async (req,resp) => {
    const {user_name, user_password, fullname, first_name, last_name, sdt} = req.body
    //Tạo độ dài của thuật toán mã hoá Bcrypt
    const salt = bcrypt.genSaltSync(10)
    //Mã hoá password dựa trên độ dài đã tạo
    const hashPassword = bcrypt.hashSync(user_password,salt)

    const user = await models.users.create(
        {
            user_name,
            user_password: hashPassword,
            fullname,
            first_name,
            last_name,
            sdt
        }
    )

    if(user != null){
        resp.status(201).send({message: 'success', status_code: 201, success: true})
    }else{
        resp.status(500).send({message: 'fail', status_code: 500, succes: false})
    }
}

const checkAuthen = (req,resp,next) => {
    const token = req.headers.authorization
    // console.log(token)
    const decoded = decodeToken(token)
    if(decoded != null){
        next()
    }else{
        resp.status(401).send({message: 'fail', status_code: 401, success: false})
    }
}

module.exports = {
    signIn,
    signUp,
    checkAuthen
}
