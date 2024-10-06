// employee.service.ts
import { Injectable } from '@angular/core';
import { Employee } from '../types';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeList: Employee[] = [
    {
      name: 'John Doe',
      work: 'Developer',
    },
  ];

  getEmployeeList() {
    return this.employeeList;
  }

  addEmployee(employee: Employee): void {
    this.employeeList.push(employee);
  }

  deleteEmployee(index: number): void {
    this.employeeList.splice(index, 1);
  }

  editEmployee(index: number, newEmployee: Employee) {
    this.employeeList[index] = newEmployee;
  }
}
