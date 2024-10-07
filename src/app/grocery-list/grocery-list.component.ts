import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../services/grocery.service';
import { Grocery } from '../types';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css',
})
export class GroceryListComponent implements OnInit {
  groceryList: Grocery[] = [];
  name: string = '';
  price: number | null = null;

  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void {
    this.groceryList = this.groceryService.getGroceryList();
  }

  add(): void {
    if (this.name && this.price) {
      this.groceryService.addGrocery({
        name: this.name,
        price: this.price,
      });

      this.name = '';
      this.price = null;
    }
  }

  deleteGrocery(index: number): void {
    this.groceryService.deleteGrocery(index);
  }

  editField(index: number, fieldName: keyof Grocery, currentValue: any) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempGrocery = {
        ...this.groceryList[index],
        [fieldName]: fieldName === 'price' ? parseFloat(value) : value,
      };
      this.update(index, tempGrocery);
    }
  }

  update(index: number, grocery: Grocery): void {
    this.groceryService.editGrocery(index, grocery);
  }
}
