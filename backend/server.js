const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const {connectDB} = require('./db/config')
const dataRoute = require('./routes/data')
const path  = require('path')

const app = express()

dotenv.config()

const port  = process.env.PORT || 3000

const dirname = path.resolve();

app.use(cors())
app.use(express.json())


app.use('/api',dataRoute)

app.use(express.static(path.join(dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(dirname, 'frontend', 'dist', 'index.html'));
});

app.listen(port,()=>{
    connectDB()
    console.log(`Server is running on port at : ${port}`);
    
})