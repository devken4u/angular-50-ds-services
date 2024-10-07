import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../types';

@Component({
  selector: 'app-food',
  templateUrl: './food-menu-list.component.html',
  styleUrl: './food-menu-list.component.css',
})
export class FoodMenuListComponent implements OnInit {
  foodList: Food[] = [];
  name: string = '';
  price: number | null = null;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foodList = this.foodService.getFoodList();
  }

  add(): void {
    if (this.name && this.price) {
      this.foodService.addFood({
        name: this.name,
        price: this.price,
      });

      this.name = '';
      this.price = null;
    }
  }

  deleteFood(index: number): void {
    this.foodService.deleteFood(index);
  }

  editField(index: number, fieldName: keyof Food, currentValue: any) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempFood = {
        ...this.foodList[index],
        [fieldName]: fieldName === 'price' ? parseFloat(value) : value,
      };
      this.update(index, tempFood);
    }
  }

  update(index: number, food: Food): void {
    this.foodService.editFood(index, food);
  }
}
