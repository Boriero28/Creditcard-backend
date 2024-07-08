import { Router } from 'express';
import RechargeController from './recharge.controller';

const router = Router();

router.post('/create', RechargeController.create);
router.get('/byCardId', RechargeController.getByCardId);
router.get('/byDateRange', RechargeController.getByDateRange);

export default router;