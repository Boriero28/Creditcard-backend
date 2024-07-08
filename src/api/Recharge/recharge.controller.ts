import { Request, Response } from 'express';
import RechargeService from './recharge.service';
import { IRecharge } from './recharge.model';



class RechargeController {
    static async create(req: Request, res: Response) {
        try {
            const rechargeData: IRecharge = req.body;
            const newRecharge = await RechargeService.createRecharge(rechargeData);
            res.status(201).json(newRecharge);
        } catch (error) {
            res.status(500).json({ message: error});
        }
    }

    static async getByCardId(req: Request, res: Response) {
        try {
            const cardId = parseInt(req.query.cardId as string, 10);
            const limit = parseInt(req.query.limit as string, 10) || 10;
            const recharges = await RechargeService.getRechargesByCardId(cardId, limit);
            res.status(200).json(recharges);
        } catch (error) {
            res.status(500).json({ message: error});
        }
    }

    static async getByDateRange(req: Request, res: Response) {
        try {
            const cardId = parseInt(req.query.cardId as string, 10);
            const dateMin = new Date(req.query.dateMin as string);
            const dateMax = new Date(req.query.dateMax as string);
            const recharges = await RechargeService.getRechargesByDateRange(cardId, dateMin, dateMax);
            res.status(200).json(recharges);
        } catch (error) {
            res.status(500).json({ message: error});
        }
    }
}

export default RechargeController;
