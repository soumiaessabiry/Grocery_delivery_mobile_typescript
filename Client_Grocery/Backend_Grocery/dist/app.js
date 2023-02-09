"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const AuthRoute =require("../src/routes/AuthRoute")
const AuthRoute_1 = __importDefault(require("./routes/AuthRoute"));
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use("/Login", AuthRoute_1.default);
const errorHandler = (err, req, res, next) => {
    console.log(err.message, err.statusCode);
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.statusCode || 500)
        .json({ message: err.message || "An unknow Error" });
};
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Connect with port ${PORT} is success`);
});
