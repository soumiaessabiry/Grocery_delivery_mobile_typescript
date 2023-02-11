import Joi from "joi";
export const registerSchema={
    Register:Joi.object({
       username:Joi.string().required().min(4).max(15),
       email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
       password:Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })
};