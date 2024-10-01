import { Component } from '@angular/core';
import { Budget } from '../types';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css',
})
export class BudgetListComponent {
  budgetList: Budget[] = [];

  projectName: string = '';
  budget: number = 0;

  add() {
    this.budgetList.push({
      projectName: this.projectName,
      budget: this.budget,
    });
    this.projectName = '';
    this.budget = 0;
  }
}
