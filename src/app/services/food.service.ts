import { Injectable } from '@angular/core';
import { Food } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private foodList: Food[] = [
    {
      name: 'Pizza',
      price: 10.99,
    },
    {
      name: 'Burger',
      price: 5.99,
    },
  ];

  getFoodList() {
    return this.foodList;
  }

  addFood(food: Food): void {
    this.foodList.push(food);
  }

  deleteFood(index: number): void {
    this.foodList.splice(index, 1);
  }

  editFood(index: number, newFood: Food) {
    this.foodList[index] = newFood;
  }
}
