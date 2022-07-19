const express = require ("express");
const app = express();
const connectDB = require ("./config/db")
const dotenv = require ("dotenv");
const userRoutes = require('./Routes/userRoutes');
const {notFound,errorHandler}= require('./Middlewares/errorMiddleware') 

// load mongo

dotenv.config();
connectDB();

app.use(express.json()); //to accept Json data

app.get('/',(req,res)=>{
    res.send("API is running Successfully");
});

app.use('/api/user',userRoutes);

app.use(notFound)
app.use(errorHandler)

app.listen(5000,console.log("Server Started on Port 5000"));
