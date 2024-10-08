import { Injectable } from '@angular/core';
import { Meal } from '../types';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private mealList: Meal[] = [
    {
      name: 'Breakfast',
    },
    {
      name: 'Lunch',
    },
  ];

  getMealList(): Meal[] {
    return this.mealList;
  }

  addMeal(meal: Meal): void {
    this.mealList.push(meal);
  }

  deleteMeal(index: number): void {
    this.mealList.splice(index, 1);
  }

  editMeal(index: number, newMeal: Meal): void {
    this.mealList[index] = newMeal;
  }
}
