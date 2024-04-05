import { Request, Response } from 'express';
import { EmployeeService} from './employee.service';
const employeeService = new EmployeeService();

export const load = async function (req:Request,res:Response):Promise<void>{
    try {
        const employees = await employeeService.load();
        res.status(200).json(employees);
      } catch (error) {
        console.error('Error finding all employees:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const newEmployeeData = req.body;  
    const createdEmployee = await employeeService.addEmployee(newEmployeeData);
    res.json(createdEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Impossibile creare il dipendente' });
  }
};

