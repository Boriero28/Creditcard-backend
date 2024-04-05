import { Router } from 'express';
import { isAuthenticated } from '../../utils/auth/authenticated.middleware';
import { createEmployee,load } from './employee.controller';


const employeeRouter = Router();

employeeRouter.get('/load',load);
employeeRouter.post('/create' ,createEmployee);

export default employeeRouter;



