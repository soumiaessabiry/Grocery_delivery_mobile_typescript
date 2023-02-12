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
exports.Login = exports.Register = void 0;
const db_1 = require("./../Config/db");
const http_errors_1 = __importDefault(require("http-errors"));
const UserModel_1 = __importDefault(require("../Model/UserModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    try {
        const checkUser = yield UserModel_1.default.findOne({ email });
        if (checkUser)
            return next((0, http_errors_1.default)(406, "Email already exists"));
        const hachPassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = new UserModel_1.default({ username, email, password: hachPassword });
        yield newUser.save();
        res.json({ user: newUser });
    }
    catch (error) {
        return next((0, http_errors_1.default)(http_errors_1.default.InternalServerError));
    }
});
exports.Register = Register;
const Login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield UserModel_1.default.findOne({ email });
        if (!user)
            return next((0, http_errors_1.default)(404, "page note found"));
        const comparPassword = yield bcryptjs_1.default.compare(password, user.password);
        if (!comparPassword)
            return next((0, http_errors_1.default)(401, "Password not Valide"));
        const token = jsonwebtoken_1.default.sign({ id: user._id }, db_1.SECRET);
        res.cookie("jwt", token);
        res.json({ token });
    }
    catch (error) {
        return next((0, http_errors_1.default)(http_errors_1.default.InternalServerError));
    }
});
exports.Login = Login;
