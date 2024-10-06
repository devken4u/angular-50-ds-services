import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../types';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit {
  studentList: Student[] = [];

  name: string = '';
  year: string = '';
  section: string = '';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentList = this.studentService.getStudentList();
  }

  deleteStudent(index: number): void {
    this.studentService.deleteStudent(index);
  }

  add(): void {
    this.studentService.addStudent({
      name: this.name,
      year: this.year,
      section: this.section,
    });

    this.name = '';
    this.year = '';
    this.section = '';
  }

  editField(index: number, fieldName: string, currentValue: string) {
    const value = prompt(fieldName, currentValue);
    if (value !== null) {
      const tempStudent = { ...this.studentList[index], [fieldName]: value };
      this.update(index, tempStudent);
    }
  }

  update(index: number, student: Student): void {
    this.studentService.editStudent(index, student);
  }
}
