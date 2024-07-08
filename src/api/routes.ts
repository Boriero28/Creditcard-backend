import { Router } from 'express';
import creditCardRouter from "./creditcard/creditcard.router";
import rechargeCardRouter from './Recharge/recharge.router';


const router = Router();


router.use("/credit-cards",creditCardRouter);
router.use("/recharges",rechargeCardRouter);


export default router;