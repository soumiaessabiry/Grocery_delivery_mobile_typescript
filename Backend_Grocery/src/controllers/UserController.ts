import { RequestHandler } from 'express';
// const env=require("dotenv");
// const userModel=require("../Model/UserModel");
export const Login:RequestHandler = (req,res,next)=>{
    res.json({message:"Hello login"})
};
