// course.service.ts
import { Injectable } from '@angular/core';
import { Course } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courseList: Course[] = [
    {
      code: 'CS101',
      name: 'Computer Science Basics',
    },
  ];

  getCourseList() {
    return this.courseList;
  }

  addCourse(course: Course): void {
    this.courseList.push(course);
  }

  deleteCourse(index: number): void {
    this.courseList.splice(index, 1);
  }

  editCourse(index: number, newCourse: Course) {
    this.courseList[index] = newCourse;
  }
}
