import  express, { ErrorRequestHandler } from 'express';
import creatHttperror from 'http-errors';
import AuthRoute from "./routes/AuthRoute"
import mongoose from "mongoose";
import {URL_DB}  from "./Config/db";
import { errorHandler } from './middleware/errorHandler';
require('dotenv').config();
const app=express();
const PORT=process.env.PORT;

app.use(express.json())
app.use("/Auth",AuthRoute);
app.use("*",()=>{
    throw creatHttperror(404,"page not found")
})

app.use(errorHandler);


mongoose
.connect(URL_DB)
.then(()=>{
    console.log("Connected to db");
    app.listen(PORT,()=>{
        console.log(`Listening On Port ${PORT} is success`);
    })
})
.catch(()=>{
    throw creatHttperror(501, "Unable to connect database");

})
