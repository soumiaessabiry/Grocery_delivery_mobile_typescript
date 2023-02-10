"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidationData = void 0;
const registerSchema_1 = require("./registerSchema");
const validator_1 = __importDefault(require("../utils/validator"));
const registerValidationData = (req, res, next) => (0, validator_1.default)(registerSchema_1.registerSchema.Register, req.body, next);
exports.registerValidationData = registerValidationData;
