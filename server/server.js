const express =require('express');
const colors = require('colors');
const morgan = require('morgan');
require('dotenv').config()

const PORT=process.env.PORT ||8080

//rest objects
const app=express();

//middlewares
app.use(express.json())
app.use(morgan('dev'))


//routes
app.get('/',(req,res)=>{
    res.status(200).send({
        message:"Server running.."
    })
})



//port
const start = async ()=>{
    try {
        // await connectDb(process.env.DATABASE);
        app.listen(PORT,()=>{
            console.log(`application running on ${PORT}`);
        })
    } catch (error) {
        console.log("error")
    }
}

start();