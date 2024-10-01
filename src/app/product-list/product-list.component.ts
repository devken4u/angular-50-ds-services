import { Component } from '@angular/core';
import { Product } from '../types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productList: Product[] = [];

  name: string = '';
  price: number = 0;

  add() {
    this.productList.push({
      name: this.name,
      price: this.price,
    });
    this.name = '';
    this.price = 0;
  }
}
