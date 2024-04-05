import { Router } from 'express';
import { createCustomer, sendMail,getAllCustomers,getFilteredCustomers,updateDepartureTime,updateCustomer,deleteCustomer} from './customer.controller';
import { validate } from "../../utils/validation.middleware";
import { CustomerDTO, UpdateDTO } from './customer.dto';
import { isAuthenticated } from '../../utils/auth/authenticated.middleware';

const customerRouter = Router();

customerRouter.post('/register',validate(CustomerDTO,'body'), createCustomer );
customerRouter.put('/update/:id',validate(UpdateDTO,'body'), isAuthenticated, updateCustomer);
customerRouter.delete('/delete/:id',isAuthenticated, deleteCustomer);
customerRouter.put('/departure',updateDepartureTime)
customerRouter.post('/send',sendMail);
customerRouter.get('/all',isAuthenticated, getAllCustomers);
customerRouter.get('/filter',isAuthenticated, getFilteredCustomers);


export default customerRouter;



