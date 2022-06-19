const express = require('express')
const {categoryData} = require('./constant')
// const categoryData = require('./constant')

const app = express()
app.use(express.json())
// app.use(express.urlencoded())

/* 
    Method :
    Get : => Dùng để lấy dữ liệu  
    Post : => Dùng để tạo dữ liệu ( thêm , cập nhật, xoá, lấy dữ liệu)
    Update : => Chuyên dùng để cập nhật lại dữ liệu
    Delete : => Chuyên dùng để xoá dữ liệu


    POST MAN (Cách gọi tham số):
    GET : => Tab Params
    POST, PUT, DELETE: => Tab Body
     - POST TYPE : 
        - form-data : Truyền tham số có đính kèm file (Multipart Form Data)
        - url-encoded (res.body): Truyền dạng key value ( không cho phép truyền file)
        - raw (res.body): Truyền tham số với nhiều dạng khác nhau (text, json, xml) truyền dũ liệu lớn không giới
        hạn về kích thước và dung lợn
*/

app.get('/menu/:tenmenu/:loai',(res,resp)=>{
    //Nơi xử lý code
    //urlencoded ( query params) (?tentham=giatri&tenthamso=giatri): res.query
    //path params (:tenthamso/:tenthamso):  res.params

    console.log(res.params)

    resp.send(`Hello menu`)
})

app.post('/menu/add/:loai',(res,resp)=>{
    
    console.log(res.params)
    console.log(res.query)
    console.log(res.body)

    resp.send(`Add Menu`)
})

app.get('/category',(res,resp)=>{
    resp.send(categoryData)
})

app.post('/category/add',(res,resp)=>{
    const newCategory = res.body
    // console.log(categoryData)
    const newData = [...categoryData,newCategory]
    // categoryData.push(newData)
    // console.log(res.body)
    resp.send(newData)
})


const port = 3000
app.listen(port,()=>{
    console.log(`Server listen port ${port}`)
})

/* 
    Route : Khai báo đường dẫn cho API
    Controller: Nơi xử lý logic code
    Models : Tương tác với database và lấy dữ liệu từ database và trả ra cho controller.

*/
