import EmployeeModel from './employee.model';
import { EmployeeDTO } from './employee.dto';

export class EmployeeService {

    async load():Promise<EmployeeDTO[]>{
        return EmployeeModel.find().exec();
    }


  async addEmployee(employeeData: EmployeeDTO): Promise<EmployeeDTO> {
    try {
      const employee = await EmployeeModel.create(employeeData);
      return employee;
    } catch (error) {
      console.error('Error creating employee:', error);
      throw new Error('Impossibile aggiungere il dipendente');
    }
  }
}


