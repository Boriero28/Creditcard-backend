import { Request, Response, NextFunction } from 'express';
import { CustomerService } from './customer.service';
import { MailResetDTO ,CustomerDTO} from './customer.dto';
import { TypedRequest } from '../../utils/typed-request.interface';
import { sendResetEmail } from '../../utils/sendMail';

const customerService = new CustomerService();

//creazione nuovo customer

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const newCustomerData = req.body;  
    const createdCustomer = await customerService.addCustomer(newCustomerData);
    res.json(createdCustomer);
  } catch (error) {
    res.status(500).json({ error: 'Impossibile creare il cliente' });
  }
};

//modifica customer

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const customerId = req.params.id; 
    const updatedData = req.body; 
    const updatedCustomer = await customerService.updateCustomer(customerId, updatedData);
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ error: 'Impossibile aggiornare il cliente' });
  }
};

//elimina customer

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const customerId = req.params.id; 
    const deletedCustomer = await customerService.deleteCustomerById(customerId);
    if (deletedCustomer) {
      res.status(200).json({ message: "Customer deleted successfully" });
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: 'Impossibile eliminare il cliente' });
  }
};


//aggiornamento ora uscita

export const updateDepartureTime = async (req: Request, res: Response) => {
  try {
    const { email, departureTime } = req.body;
    const updatedCustomer = await customerService.updateCustomerDepartureTime(email, departureTime);
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ error: 'Impossibile aggiornare il campo departureTime' });
  }
};

//invio email quando ci si registra

export const sendMail = async (
  req: TypedRequest<MailResetDTO>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    await sendResetEmail(email);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    next(err);
  }
};

//stampa tutti customers

export const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Impossibile recuperare tutti i clienti' });
  }
};

//stampa a seconda dei filtri

export const getFilteredCustomers = async (req: Request, res: Response) => {
  try {
    const filters = req.query;
    const customers = await customerService.getFilteredCustomers(filters);
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Impossibile recuperare i clienti filtrati' });
  }
};








