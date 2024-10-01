import { Component } from '@angular/core';
import { Grocery } from '../types';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css',
})
export class GroceryListComponent {
  groceryList: Grocery[] = [];

  name: string = '';
  price: number = 0;

  add() {
    this.groceryList.push({
      name: this.name,
      price: this.price,
    });
    this.name = '';
    this.price = 0;
  }
}
