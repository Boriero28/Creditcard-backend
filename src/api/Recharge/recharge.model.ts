import { Schema, model, Document } from 'mongoose';

interface IRecharge extends Document {
    RicaricaID: number;
    CartaCreditoID: number;
    DataRicarica: Date;
    ImportoRicarica: number;
}

const rechargeSchema = new Schema<IRecharge>({
    RicaricaID: { type: Number, required: true, unique: true },
    CartaCreditoID: { type: Number, required: true },
    DataRicarica: { type: Date, required: true },
    ImportoRicarica: { type: Number, required: true },
});

const Recharge = model<IRecharge>('Recharge', rechargeSchema);

export default Recharge;
export { IRecharge };