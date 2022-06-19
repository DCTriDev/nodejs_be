const express = require('express')
const app = express()
app.use(express.json())

//cấu hình sử dụng biến môi trường ở file .env
require('dotenv').config()

const { rootRouter } = require('./router/root_router')

/*  
    localhost:3000/api/v1/menu/
    localhost:3000/api/v1/menu/5
*/ 

app.use('/api/v1',rootRouter)

const port = 3000
app.listen(port,()=>{
    console.log(`Server listen port ${port}`)
})