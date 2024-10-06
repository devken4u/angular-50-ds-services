import { Component, OnInit } from '@angular/core';
import { Product } from '../types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  name: string = '';
  price: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProductList();
  }

  add(): void {
    if (this.name && this.price !== null) {
      this.productService.addProduct({ name: this.name, price: this.price });
      this.name = '';
      this.price = null;
    }
  }

  deleteProduct(index: number): void {
    this.productService.deleteProduct(index);
  }

  editField(index: number, fieldName: string, currentValue: any) {
    const value = prompt(fieldName, currentValue);
    if (value !== null) {
      const tempProduct = {
        ...this.productList[index],
        [fieldName]: fieldName === 'price' ? Number(value) : value,
      };
      this.update(index, tempProduct);
    }
  }

  update(index: number, product: Product): void {
    this.productService.editProduct(index, product);
  }
}
