import { Router } from "express";
import { Register,Login ,Test} from "../controllers/UserController";
import { registerValidationData ,LoginValidationData} from "../validation/authValidation/userValidation";
import {authenticatUser} from "../middleware/authenticatUser"
const router = Router();

router.get("/",authenticatUser,Test);
router.post("/Register",registerValidationData,Register);
router.post("/Login",LoginValidationData,Login)



export default router;