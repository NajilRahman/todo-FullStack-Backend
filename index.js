require('dotenv').config()
require('./connection/connection')
const express=require('express')
const cors=require('cors')
const router = require('./routes/routes')
const server=express()

server.use(cors())
server.use(express.json())
server.use(router)

const PORT=process.env.PORT || 3000

server.listen(PORT,()=>{
    console.log('server connected to Port :',PORT)
})