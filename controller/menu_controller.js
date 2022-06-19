
const getAllMenu = (res,resp) => {
    console.log(`Get All Menu From Controller`)
}

const getDetailMenu = (res,resp) => {
    resp.send(`Get detail from controller`)
}

module.exports = {
    getAllMenu,
    getDetailMenu
}