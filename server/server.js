const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require("cors");
require('dotenv').config()
const router = require("./routes/userRoutes")
const routers = require("./routes/adminRoutes")
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 8080

//rest objects
const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//database  
connectDB();

app.use(cookieParser())

//middlewares
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use(router)
app.use(routers)



//port
const start = async () => {
    try {
        // await connectDb(process.env.DATABASE);
        app.listen(PORT, () => {
            console.log(`application running on ${PORT}`);
        })
    } catch (error) {
        console.log("error")
    }
}

start();