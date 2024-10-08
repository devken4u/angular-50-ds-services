import { Component, OnInit } from '@angular/core';
import { MealService } from '../services/meal.service';
import { Meal } from '../types';

@Component({
  selector: 'app-meal',
  templateUrl: './meal-plan-list.component.html',
  styleUrls: ['./meal-plan-list.component.css'],
})
export class MealPlanListComponent implements OnInit {
  mealList: Meal[] = [];
  name: string = '';

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealList = this.mealService.getMealList();
  }

  add(): void {
    if (this.name) {
      this.mealService.addMeal({
        name: this.name,
      });
      this.name = '';
    }
  }

  deleteMeal(index: number): void {
    this.mealService.deleteMeal(index);
  }

  editField(index: number, fieldName: keyof Meal, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const updatedMeal = {
        ...this.mealList[index],
        [fieldName]: value,
      };
      this.update(index, updatedMeal);
    }
  }

  update(index: number, meal: Meal): void {
    this.mealService.editMeal(index, meal);
  }
}
