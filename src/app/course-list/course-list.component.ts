import { Component } from '@angular/core';
import { Course } from '../types';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  courseList: Course[] = [];

  name: string = '';
  code: string = '';

  add() {
    this.courseList.push({
      name: this.name,
      code: this.code,
    });
    this.name = '';
    this.code = '';
  }
}
