import { Router } from "express";
import {listAllUsers,me} from "./user.controller";
import { isAuthenticated } from "../../utils/auth/authenticated.middleware";


const router = Router();

router.get('/me', isAuthenticated, me);
router.get('/', listAllUsers);

export default router;