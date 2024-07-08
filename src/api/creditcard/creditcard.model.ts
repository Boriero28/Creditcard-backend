import { Schema, model, Document } from 'mongoose';

interface ICreditCard extends Document {
    CartaCreditoID: number;
    NumeroCartaCredito: string;
    Titolare: string;
    Scadenza: Date;
    CreditoResiduo: number;
}

const creditCardSchema = new Schema<ICreditCard>({
    CartaCreditoID: { type: Number, required: true, unique: true },
    NumeroCartaCredito: { type: String, required: true, length: 16 },
    Titolare: { type: String, required: true },
    Scadenza: { type: Date, required: true },
    CreditoResiduo: { type: Number, required: true },
});


const CreditCard = model<ICreditCard>('CreditCard', creditCardSchema);

export default CreditCard;
export { ICreditCard };
