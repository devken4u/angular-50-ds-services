import { Injectable } from '@angular/core';
import { Product } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList: Product[] = [
    { name: 'Laptop', price: 999 },
    { name: 'Smartphone', price: 499 },
    { name: 'Tablet', price: 299 },
  ];

  getProductList() {
    return this.productList;
  }

  addProduct(product: Product): void {
    this.productList.push(product);
  }

  deleteProduct(index: number): void {
    this.productList.splice(index, 1);
  }

  editProduct(index: number, newProduct: Product) {
    this.productList[index] = newProduct;
  }
}
