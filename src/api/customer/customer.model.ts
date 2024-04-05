import mongoose, { Document } from 'mongoose';
import { CustomerDTO } from './customer.dto';

export interface ICustomer extends CustomerDTO, Document {}

const customerSchema = new mongoose.Schema<ICustomer>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  arrivalTime: { type: String, required: true },
  departureTime: String,
  reason: { type: String, required: true },
  referencePersons: { type: [String], required: true },
  notes: String,
});

export default mongoose.model<ICustomer>('Customer', customerSchema);
