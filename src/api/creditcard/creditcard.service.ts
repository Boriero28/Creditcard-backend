import CreditCard, { ICreditCard } from "./creditcard.model";

class CreditCardService {
    static async getAll(limit: number): Promise<ICreditCard[]> {
        return await CreditCard.find().limit(limit);
    }

    static async create(creditCardData: ICreditCard): Promise<ICreditCard> {
        const newCreditCard = new CreditCard(creditCardData);
        return await newCreditCard.save();
    }

    static async getByTitolare(cognome: string): Promise<ICreditCard[]> {
        const today = new Date();
        return await CreditCard.find({
            Titolare: { $regex: cognome, $options: 'i' },
            Scadenza: { $gte: today }
        });
    }

    static async checkExpiration(cartaCreditoID: number): Promise<boolean> {
        const creditCard = await CreditCard.findOne({ CartaCreditoID: cartaCreditoID });
        if (!creditCard) {
            throw new Error('Credit card not found');
        }
        return creditCard.Scadenza < new Date();
    }
}

export default CreditCardService;