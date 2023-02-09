import  express, { ErrorRequestHandler } from 'express';
import creatHttperror from 'http-errors';
import AuthRoute from "./routes/AuthRoute"
import mongoose from "mongoose";
import {URL_DB}  from "./Config/db";

require('dotenv').config();
const app=express();
const PORT=process.env.PORT;

app.use("/Auth",AuthRoute);
app.use("*",()=>{
    throw creatHttperror(404,"page not found")
})
const errorHandler:ErrorRequestHandler=(err,req,res,next)=>{
    console.log(err.message,err.statusCode);
        if(res.headersSent){
            return next(err)
        }
        res.status(err.statusCode||500)
        .json({message:err.message||"An unknow Error"})
};
app.use(errorHandler);


mongoose
.connect(URL_DB)
.then(()=>{
    console.log("Connected to db");
    app.listen(PORT,()=>{
        console.log(`Connect with port ${PORT} is success`);
    })
})
.catch(()=>{
    throw creatHttperror(501, "Unable to connect database");

})
// mongoose
//   .connect(URL_DB)
//   .then(() => {
//     console.log("Connected to db");
//     app.listen(PORT,()=>{
//         console.log(`Connect with port ${PORT} is success`);
//     })
//   })
//   .catch(() => {
//     throw creatHttperror(501, "Unable to connect database");
//   });
