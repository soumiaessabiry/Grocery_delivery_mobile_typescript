"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const UserModel_1 = __importDefault(require("../Model/UserModel"));
const Register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, confirmpassword } = req.body;
    try {
        const checkUser = yield UserModel_1.default.findOne({ email });
        if (checkUser)
            return next((0, http_errors_1.default)(406, "Email already exists"));
        const newUser = new UserModel_1.default({ username, email, password, confirmpassword });
        yield newUser.save();
        res.json({ data: username, email, password, confirmpassword });
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.Register = Register;
