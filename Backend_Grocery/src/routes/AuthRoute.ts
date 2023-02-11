import { Router } from "express";
import { Register,Login } from "../controllers/UserController";
import { registerValidationData } from "../validation/authValidation/registerValidation";
const router = Router();

router.post("/Register",registerValidationData,Register);
router.post("/Login",Login)



export default router;