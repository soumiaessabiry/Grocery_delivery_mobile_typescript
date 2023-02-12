"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userSchema = {
    Register: joi_1.default.object({
        username: joi_1.default.string().required().min(4).max(15),
        email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: joi_1.default.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        Role: joi_1.default.string()
    }),
    Login: joi_1.default.object({
        email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: joi_1.default.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    }),
};
