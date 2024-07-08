import { Request, Response } from 'express';
import CreditCardService from './creditcard.service';
import { ICreditCard } from './creditcard.model';



class CreditCardController {
    static async getAll(req: Request, res: Response) {
        try {
            const limit = parseInt(req.query.limit as string, 10) || 10;
            const creditCards = await CreditCardService.getAll(limit);
            res.status(200).json(creditCards);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const creditCardData: ICreditCard = req.body;
            const newCreditCard = await CreditCardService.create(creditCardData);
            res.status(201).json(newCreditCard);
        } catch (error) {
            res.status(500).json({ message: error});
        }
    }

    static async getByTitolare(req: Request, res: Response) {
        try {
            const cognome = req.query.cognome as string;
            const creditCards = await CreditCardService.getByTitolare(cognome);
            res.status(200).json(creditCards);
        } catch (error) {
            res.status(500).json({ message: error});
        }
    }

    static async checkExpiration(req: Request, res: Response) {
        try {
            const cartaCreditoID = parseInt(req.params.id, 10);
            const isExpired = await CreditCardService.checkExpiration(cartaCreditoID);
            res.status(200).json({ isExpired });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}

export default CreditCardController;
