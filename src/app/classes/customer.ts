export class Customer
{
    customerId: number;
    firstName: string;
    surname: string;
    pesel: string;

    constructor(firstName: string, surname: string, pesel: string)
    {
        this.firstName = firstName;
        this.surname = surname;
        this.pesel = pesel;
    }
}
