import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose
 .connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDb..");
}).catch((Err)=>{
    console.log(Err);
})

const app = express();

app.use(cookieParser());
app.use(express.json());

app.listen(3000,()=>{
    console.log("server is listining at port 3000");
});

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/listing",listingRouter);





app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internel Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});


