"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidationData = exports.registerValidationData = void 0;
const userSchema_1 = require("./userSchema");
const validator_1 = __importDefault(require("../utils/validator"));
const registerValidationData = (req, res, next) => (0, validator_1.default)(userSchema_1.userSchema.Register, req.body, next);
exports.registerValidationData = registerValidationData;
const LoginValidationData = (req, res, next) => (0, validator_1.default)(userSchema_1.userSchema.Login, req.body, next);
exports.LoginValidationData = LoginValidationData;
