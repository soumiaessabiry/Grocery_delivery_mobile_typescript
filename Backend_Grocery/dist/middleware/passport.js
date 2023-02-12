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
const UserModel_1 = __importDefault(require("../Model/UserModel"));
const db_1 = require("../Config/db");
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const { Strategy } = passport_jwt_1.default;
const cookieExtractor = (req) => {
    var _a;
    let token = null;
    if (req && req.cookies) {
        token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token;
    }
    return token;
};
const optionsCookie = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: db_1.SECRET,
};
exports.default = (passport) => {
    passport.use(new Strategy(optionsCookie, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
        yield UserModel_1.default.findById(payload.userId)
            .then((UserModel) => {
            UserModel ? done(null, UserModel) : done(null, false);
        })
            .catch(() => done(null, false));
    })));
};
