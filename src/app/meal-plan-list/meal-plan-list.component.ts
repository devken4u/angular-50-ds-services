import { Component } from '@angular/core';
import { Meal } from '../types';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css',
})
export class MealPlanListComponent {
  mealList: Meal[] = [];

  name: string = '';

  add() {
    this.mealList.push({
      name: this.name,
    });
    this.name = '';
  }
}
