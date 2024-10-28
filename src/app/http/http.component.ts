import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = new Product(0, '', '', 0, 0);
  editingProduct: Product | null = null;

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  // Fetch all products
  fetchProducts(): void {
    this.service.fetchAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  // Add a new product
  addProduct(): void {
    this.service.addProduct(this.newProduct).subscribe((product: Product) => {
      this.products.push(product); // Add the new product to the list
      this.newProduct = new Product(0, '', '', 0, 0); // Reset form
    });
  }

  // Edit a product (populate the form for editing)
  editProduct(product: Product): void {
    this.editingProduct = { ...product }; // Clone product for editing
  }

  // Update the product
  updateProduct(): void {
    if (this.editingProduct) {
      this.service.updateProduct(this.editingProduct.productId, this.editingProduct).subscribe((updatedProduct: Product) => {
        const index = this.products.findIndex(p => p.productId === updatedProduct.productId);
        if (index > -1) {
          this.products[index] = updatedProduct; // Update the product in the list
        }
        this.editingProduct = null; // Reset editing state
      });
    }
  }

  // Delete a product
  deleteProduct(productId: number): void {
    this.service.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter(product => product.productId !== productId); // Remove product from list
    });
  }

  // Cancel editing
  cancelEditing(): void {
    this.editingProduct = null;
    this.newProduct = new Product(0, '', '', 0, 0); // Reset form if needed
  }
}
