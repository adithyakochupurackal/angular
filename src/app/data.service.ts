import { Injectable } from '@angular/core';
 import { Product } from './Product';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: Product[] = [];
  getProducts(): Product[]
  {
    return this.products
  }
  
  constructor(private http: HttpClient) {
    console.warn('creating products')
    this.products[0] = new Product(1021, 'Tata', 'Dish TV', 10, 2500);
    this.products[1] = new Product(3023, 'Wipro', 'Blubs', 210, 300);
    this.products[2] = new Product(3421, 'TVS', 'Belts', 210, 5500);
    this.products[3] = new Product(2021, 'Reliance', 'Dish TV', 50, 4500);
    this.products[4] = new Product(1432, 'ActFiber', 'Router', 60, 1400);
    this.products[5] = new Product(1909, 'Samsung', 'Smart TV', 50, 72500);
    this.products[6] = new Product(1654, 'LG', 'Airconditioners', 20, 52500);
    this.products[7] = new Product(1721, 'Usha', 'Table fans', 40, 1200);
    this.products[8] = new Product(1454, 'One+', 'Mobiles', 50, 82500);

   }
   fetchAllProducts():Observable<any>{
      const url:string="http://localhost:8090/product/api.1.0/getAllProducts"
       return this.http.get(url);
   }

     // Add a new product
  addProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:8090/product/api.1.0/addProduct", newProduct);
  }

  // Get a product by ID
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(" http://localhost:8090/product/api.1.0/product/${id}");
  }

  // Update a product
  updateProduct(id: number, updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>("http://localhost:8090/product/api.1.0/product/update/${id}", updatedProduct);
  }

  // Delete a product
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>("http://localhost:8090/product/api.1.0/product/delete/${id}");
  }
}

