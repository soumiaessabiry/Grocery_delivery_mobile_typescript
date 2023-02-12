import { userSchema } from './userSchema';
import { RequestHandler } from 'express';
import validator from '../utils/validator';
export  const registerValidationData:RequestHandler=(req,res,next)=>
validator(userSchema.Register,req.body,next)
export  const LoginValidationData:RequestHandler=(req,res,next)=>
validator(userSchema.Login,req.body,next)
