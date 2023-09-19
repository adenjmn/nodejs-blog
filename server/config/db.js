const mongoose = require('mongoose');
const connectionDB = async () => {
    try{
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`DB AKTIF:${conn.connection.host}`);
    }catch(error){
        console.log(error);
    }
}

module.exports = connectionDB;