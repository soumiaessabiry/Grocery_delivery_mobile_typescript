import { RequestHandler } from 'express';
import creatHttperror from 'http-errors';
import UserModel from '../Model/UserModel';

export const Register:RequestHandler =async (req,res,next)=>{
    const {username,email,password,confirmpassword}:DataRegister=req.body;
   try {
        const checkUser=await UserModel.findOne({email});
        if(checkUser) return next(creatHttperror(406,"Email already exists"))
        const newUser=new UserModel({username,email,password,confirmpassword});
        await newUser.save();
        res.json({data:username,email,password,confirmpassword})
    } catch (error) {
        return next(creatHttperror.InternalServerError);
   }
};
