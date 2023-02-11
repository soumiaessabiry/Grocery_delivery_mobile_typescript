"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const registerValidation_1 = require("../validation/authValidation/registerValidation");
const router = (0, express_1.Router)();
router.post("/Register", registerValidation_1.registerValidationData, UserController_1.Register);
router.post("/Login", UserController_1.Login);
exports.default = router;
