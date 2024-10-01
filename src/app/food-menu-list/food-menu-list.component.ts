import { Component } from '@angular/core';
import { Food } from '../types';

@Component({
  selector: 'app-food-menu-list',
  templateUrl: './food-menu-list.component.html',
  styleUrl: './food-menu-list.component.css',
})
export class FoodMenuListComponent {
  foodList: Food[] = [];

  name: string = '';
  price: number = 0;

  add() {
    this.foodList.push({
      name: this.name,
      price: this.price,
    });
    this.name = '';
    this.price = 0;
  }
}
