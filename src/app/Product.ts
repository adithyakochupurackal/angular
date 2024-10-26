export class Product {
    productId: number;
    description: string; 
    brand: string;       
    qty: number;
    price: number;

    constructor(
        productId: number,description: string,brand: string,qty: number,price: number
    ) {
        this.productId = productId;
        this.description = description;
        this.brand = brand;
        this.qty = qty;
        this.price = price;
    }
}