import { Router } from "express";
import { Register } from "../controllers/UserController";
import { registerValidationData } from "../validation/authValidation/registerValidation";
const router = Router();

router.post("/Register",registerValidationData,Register);



export default router;