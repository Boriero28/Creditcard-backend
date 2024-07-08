import { Router } from 'express';
import CreditCardController from './creditcard.controller';

const router = Router();

router.get('/list', CreditCardController.getAll);
router.post('/create', CreditCardController.create);
router.get('/ciao', CreditCardController.getByTitolare);
router.get('/check/:id', CreditCardController.checkExpiration);

export default router;