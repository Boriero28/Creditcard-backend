import CreditCard,{ICreditCard} from "../creditcard/creditcard.model";
import Recharge,{IRecharge} from "./recharge.model";

class RechargeService {
    static async createRecharge(rechargeData: IRecharge): Promise<IRecharge> {
        // Verifica che la carta di credito esista e non sia scaduta
        const creditCard = await CreditCard.findOne({ CartaCreditoID: rechargeData.CartaCreditoID });
        if (!creditCard) {
            throw new Error('Carta di credito non trovata');
        }
        if (creditCard.Scadenza < new Date()) {
            throw new Error('Carta di credito scaduta');
        }

        // Memorizza la ricarica
        const newRecharge = new Recharge(rechargeData);
        await newRecharge.save();

        // Aggiorna il credito residuo della carta di credito
        creditCard.CreditoResiduo += rechargeData.ImportoRicarica;
        await creditCard.save();

        return newRecharge;
    }

    static async getRechargesByCardId(cardId: number, limit: number): Promise<IRecharge[]> {
        return await Recharge.find({ CartaCreditoID: cardId }).limit(limit);
    }

    static async getRechargesByDateRange(cardId: number, dateMin: Date, dateMax: Date): Promise<IRecharge[]> {
        return await Recharge.find({
            CartaCreditoID: cardId,
            DataRicarica: {
                $gte: dateMin,
                $lte: dateMax
            }
        });
    }
}

export default RechargeService;