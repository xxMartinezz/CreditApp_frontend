export class Product
{
    productId: number;
    productName: string;
    value: number;

    constructor(productName: string, value: number)
    {
        this.productName = productName;
        this.value = value;
    }
}
