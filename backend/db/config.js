const mongoose = require('mongoose')

exports.connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB)
        console.log('MongoDB connected')
    }catch{
        console.log('Error connecting to MongoDB!!!')
    }
}

