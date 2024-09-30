import { Component } from '@angular/core';
import { Employee } from '../types';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  employeeList: Employee[] = [];

  name: string = '';
  work: string = '';

  add() {
    this.employeeList.push({
      name: this.name,
      work: this.work,
    });
    this.name = '';
    this.work = '';
  }
}
