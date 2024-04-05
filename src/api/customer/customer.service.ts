import CustomerModel from './customer.model';
import { CustomerDTO } from './customer.dto';

export class CustomerService {

  //aggiunta di un nuovo customer

  async addCustomer(customerData: CustomerDTO): Promise<CustomerDTO> {
    try {
      const customer = await CustomerModel.create(customerData);
      return customer;
    } catch (error) {
      console.error('Error creating customer:', error);
      throw new Error('Impossibile aggiungere il cliente');
      
    }
  }

  //modifica customer

  async updateCustomer(customerId: string, updatedData: CustomerDTO): Promise<CustomerDTO | null> {
    try { 
      const customer = await CustomerModel.findById(customerId).exec();

      if (!customer) {
        throw new Error('Cliente non trovato');
      }

      // Aggiorna solo i campi presenti nei dati aggiornati
      Object.assign(customer, updatedData);
      await customer.save();

      return customer;
    } catch (error) {
      console.error('Errore durante l\'aggiornamento del cliente:', error);
      return null;
    }
  }

  //elimina customer

  async deleteCustomerById(id: string): Promise<boolean> {
    try {
      const deletedCustomer = await CustomerModel.findByIdAndDelete(id).exec();
      return !!deletedCustomer;
    } catch (error) {
      console.error('Error deleting customer:', error);
      throw new Error('Impossibile eliminare il cliente');
    }
  }




  //aggiornamento ora uscita

  async updateCustomerDepartureTime(email: string, departureTime: string): Promise<CustomerDTO | null> {
    try {
      //se ci sono piu clienti con la stessa mail, mi modifica quello che è stato aggiunto con la data corrente
      const today = new Date().toISOString().split('T')[0];
      const customer = await CustomerModel.findOne({ email, date: today }).exec();

      if (!customer) {
        throw new Error('Cliente non trovato per oggi');
      }

      customer.departureTime = departureTime;
      await customer.save();

      return customer;
    } catch (error) {
      console.error('Errore durante l\'aggiornamento del campo departureTime:', error);
      return null;
    }
  }


  //stampa di tutti i customer

  async getAllCustomers(): Promise<CustomerDTO[]> {
    try {
      const customers = await CustomerModel.find().exec();
      return customers;
    } catch (error) {
      console.error('Error retrieving all customers:', error);
      throw new Error('Impossibile recuperare tutti i clienti');
    }
  }

  //stampa customer a seconda dei filtri

  async getFilteredCustomers(filters: any): Promise<CustomerDTO[]> {
    try {
      const customers = await CustomerModel.find(filters).exec();
      return customers;
    } catch (error) {
      console.error('Error retrieving filtered customers:', error);
      throw new Error('Impossibile recuperare i clienti filtrati');
    }
  }
  
}


