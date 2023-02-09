import  express, { ErrorRequestHandler } from 'express';
import creatHttperror from 'http-errors';
// const AuthRoute =require("../src/routes/AuthRoute")
import AuthRoute from "./routes/AuthRoute"
require('dotenv').config();
const app=express();
const PORT=process.env.PORT;
app.use("/Auth",AuthRoute);

const errorHandler:ErrorRequestHandler=(err,req,res,next)=>{
    console.log(err.message,err.statusCode);
        if(res.headersSent){
            return next(err)
        }
        res.status(err.statusCode||500)
        .json({message:err.message||"An unknow Error"})
};
app.use(errorHandler)


app.listen(PORT,()=>{
console.log(`Connect with port ${PORT} is success`);
})