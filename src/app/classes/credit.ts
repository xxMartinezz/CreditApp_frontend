import { Customer } from './customer';
import { Product } from './product';

export class CreditPage
{
    content: Credit[];
    totalElements: number;
    totalPages: number;

    constructor(content: Credit[], totalElements: number, totalPages: number) {
        this.content = content;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
      }
}


export class Credit
{
    creditId: number;
    creditName: string;
    customer: Customer;
    product: Product;

    constructor(creditName: string, customer: Customer, product: Product)
    {
        this.creditName = creditName;
        this.customer = customer;
        this.product = product;
    }
}

/*
export class Credit
{
    creditId: number;
    creditName: string;

    constructor(creditName: string)
    {
        this.creditName = creditName;
    }
}*/