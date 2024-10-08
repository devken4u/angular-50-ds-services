import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../types';

@Component({
  selector: 'app-budget',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css'],
})
export class BudgetListComponent implements OnInit {
  budgetList: Budget[] = [];
  projectName: string = '';
  budget: number | null = null;

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetList = this.budgetService.getBudgetList();
  }

  add(): void {
    if (this.projectName && this.budget) {
      this.budgetService.addBudget({
        projectName: this.projectName,
        budget: this.budget,
      });
      this.projectName = '';
      this.budget = null;
    }
  }

  deleteBudget(index: number): void {
    this.budgetService.deleteBudget(index);
  }

  editField(index: number, fieldName: keyof Budget, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null && value !== '') {
      const updatedBudget = {
        ...this.budgetList[index],
        [fieldName]: fieldName === 'budget' ? parseFloat(value) : value,
      };
      this.update(index, updatedBudget);
    }
  }

  update(index: number, budget: Budget): void {
    this.budgetService.editBudget(index, budget);
  }
}
