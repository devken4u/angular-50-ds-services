import { Injectable } from '@angular/core';
import { Grocery } from '../types';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  private groceryList: Grocery[] = [
    {
      name: 'Rice',
      price: 1.99,
    },
    {
      name: 'Bread',
      price: 2.49,
    },
  ];

  getGroceryList() {
    return this.groceryList;
  }

  addGrocery(grocery: Grocery): void {
    this.groceryList.push(grocery);
  }

  deleteGrocery(index: number): void {
    this.groceryList.splice(index, 1);
  }

  editGrocery(index: number, newGrocery: Grocery) {
    this.groceryList[index] = newGrocery;
  }
}
