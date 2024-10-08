import { Injectable } from '@angular/core';
import { Budget } from '../types';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private budgetList: Budget[] = [
    {
      projectName: 'Website Development',
      budget: 5000,
    },
    {
      projectName: 'Marketing Campaign',
      budget: 3000,
    },
  ];

  getBudgetList(): Budget[] {
    return this.budgetList;
  }

  addBudget(budget: Budget): void {
    this.budgetList.push(budget);
  }

  deleteBudget(index: number): void {
    this.budgetList.splice(index, 1);
  }

  editBudget(index: number, newBudget: Budget): void {
    this.budgetList[index] = newBudget;
  }
}
