import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../types';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] = [];
  name: string = '';
  work: string = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeList = this.employeeService.getEmployeeList();
  }

  add(): void {
    if (this.name && this.work) {
      this.employeeService.addEmployee({
        name: this.name,
        work: this.work,
      });

      this.name = '';
      this.work = '';
    }
  }

  deleteEmployee(index: number): void {
    this.employeeService.deleteEmployee(index);
  }

  editField(index: number, fieldName: keyof Employee, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempEmployee = { ...this.employeeList[index], [fieldName]: value };
      this.update(index, tempEmployee);
    }
  }

  update(index: number, employee: Employee): void {
    this.employeeService.editEmployee(index, employee);
  }
}
