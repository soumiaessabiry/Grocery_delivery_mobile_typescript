import { RequestHandler } from 'express';
import creatHttperror from 'http-errors';
import UserModel from '../Model/UserModel';
import bcryptjs from "bcryptjs";
export const Register:RequestHandler=async (req,res,next)=>{
    const {username,email,password}:DataRegister=req.body;
    try {
        const checkUser=await UserModel.findOne({email});
        if(checkUser)return next(creatHttperror(406,"Email already exists"));
        const hachPassword=await bcryptjs.hash(password,10);
        const newUser=new UserModel({username,email,password:hachPassword});
        await newUser.save();
        res.json({user:newUser})
    } catch (error) {
        return next(creatHttperror(creatHttperror.InternalServerError))    
    }
}
export const Login:RequestHandler=async(req,res,next)=>{
    const {email,password}=req.body;
    try {
        const user=await UserModel.findOne({email});
        if(!user) return next(creatHttperror(404,"page note found"));
        const comparPassword=await bcryptjs.compare(password,user.password)
        if(!comparPassword) return next(creatHttperror(401,"Password not Valide"))
        res.json({MessageLogin:"Welcom user"})

    } catch (error) {
        return next(creatHttperror(creatHttperror.InternalServerError))    
    }
}














