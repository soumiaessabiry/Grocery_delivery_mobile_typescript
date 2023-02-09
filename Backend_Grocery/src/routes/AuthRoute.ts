import { Router } from "express";
import { Login } from "../controllers/UserController";
const router = Router();

router.get("/Login",Login);



export default router;