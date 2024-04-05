import { Router } from 'express';
import customerRouter from './customer/customer.router';
import employeeRouter from './employee/employee.router';
import authRouter from "./auth/auth.router";
import userRouter from "./user/user.router";

const router = Router();

router.use(authRouter);
router.use("/",authRouter);
router.use("/users",userRouter)
router.use('/customer',customerRouter);
router.use('/employee',employeeRouter);

export default router;