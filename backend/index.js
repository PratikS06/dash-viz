const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const {connectDB} = require('./db/config')
const dataRoute = require('./routes/data')

const app = express()

dotenv.config()

const port  = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api',dataRoute)

app.listen(port,()=>{
    connectDB()
    console.log(`Server is running on port at : ${port}`);
    
})