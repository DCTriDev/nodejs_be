const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'db_shopee', //database name
    'root', //username
    '1002', //password
    {
        host: "127.0.0.1", //url sql server, RDMS
        port: "3308",  // port
        dialect: "mysql" // sql server đang sử dụng
    }
)

module.exports = {
    sequelize
}
