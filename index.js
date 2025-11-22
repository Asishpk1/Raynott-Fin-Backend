const express = require('express')
const cors = require('cors')
const Router = require('./Router/Router')
require('dotenv').config()
require('./Database/dbConnection')

const FinanceServer = express()

FinanceServer.use(cors())

FinanceServer.use(express.json())
FinanceServer.use(Router)

const PORT = process.env.PORT || 3000

FinanceServer.listen(PORT,()=>{
    console.log(`FinanceServer running at Port ${PORT}`);
    
})

FinanceServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>Server running and waiting for client request !!</h1>`)  

})