import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
 .connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDb..");
}).catch((Err)=>{
    console.log(Err);
})

const app = express();


app.listen(3000,()=>{
    console.log("server is listining at port 3000");
});
