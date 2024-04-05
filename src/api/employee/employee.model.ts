import mongoose, { Document } from 'mongoose';
import { EmployeeDTO } from './employee.dto';

export interface IEmployee extends EmployeeDTO, Document {}

const employeeSchema = new mongoose.Schema<IEmployee>({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
});


export default mongoose.model<IEmployee>('Employee', employeeSchema);
