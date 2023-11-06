const mongoose = require('mongoose');

require('dotenv').config();

exports.connectDB = async () => {
    await mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(()=> {
        console.log("DB connection is successfully");
    })
    .catch((err)=> {
        console.log("Connection Issue");
        console.error(err);
        process.exit(1);
    })
}