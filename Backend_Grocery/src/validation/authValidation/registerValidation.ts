import { registerSchema } from './registerSchema';
import { RequestHandler } from 'express';
import validator from '../utils/validator';
export  const registerValidationData:RequestHandler=(req,res,next)=>
validator(registerSchema.Register,req.body,next)
