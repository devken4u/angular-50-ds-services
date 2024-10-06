import { Injectable } from '@angular/core';
import { Student } from '../types';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentList: Student[] = [
    {
      name: 'Mike',
      year: '4th',
      section: 'Luna',
    },
  ];

  getStudentList() {
    return this.studentList;
  }

  addStudent(student: Student): void {
    this.studentList.push(student);
  }

  deleteStudent(index: number): void {
    this.studentList.splice(index, 1);
  }

  editStudent(index: number, newStudent: Student) {
    this.studentList[index] = newStudent;
  }
}
