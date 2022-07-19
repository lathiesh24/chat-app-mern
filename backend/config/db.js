const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB= async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log(`Error:${error.message}`);
    }
};

module.exports = connectDB;