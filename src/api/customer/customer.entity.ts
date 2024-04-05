export interface Customer {
    firstName: string;
    lastName: string;
    company: string;
    email:string;
    date: String;
    arrivalTime: String;
    departureTime?: String;
    reason: string;
    referencePersons: string[];
    notes?: string;
  }