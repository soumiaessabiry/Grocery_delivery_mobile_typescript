"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const AuthRoute_1 = __importDefault(require("./routes/AuthRoute"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = require("./Config/db");
const errorHandler_1 = require("./middleware/errorHandler");
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middleware/passport"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(passport_1.default.initialize());
(0, passport_2.default)(passport_1.default);
app.use("/Auth", AuthRoute_1.default);
app.use("*", () => {
    throw (0, http_errors_1.default)(404, "page not found");
});
app.use(errorHandler_1.errorHandler);
mongoose_1.default
    .connect(db_1.URL_DB)
    .then(() => {
    console.log("Connected to db");
    app.listen(PORT, () => {
        console.log(`Listening On Port ${PORT} is success`);
    });
})
    .catch(() => {
    throw (0, http_errors_1.default)(501, "Unable to connect database");
});
