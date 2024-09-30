import { Component } from '@angular/core';
import { Student } from '../types';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  studentList: Student[] = [];

  name: string = '';
  year: string = '';
  section: string = '';

  add() {
    this.studentList.push({
      name: this.name,
      year: this.year,
      section: this.section,
    });
    this.name = '';
    this.year = '';
    this.section = '';
  }
}
