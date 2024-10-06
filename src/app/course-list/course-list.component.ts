import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../types';

@Component({
  selector: 'app-course',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent implements OnInit {
  courseList: Course[] = [];
  code: string = '';
  name: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseList = this.courseService.getCourseList();
  }

  add(): void {
    if (this.code && this.name) {
      this.courseService.addCourse({
        code: this.code,
        name: this.name,
      });

      this.code = '';
      this.name = '';
    }
  }

  deleteCourse(index: number): void {
    this.courseService.deleteCourse(index);
  }

  editField(index: number, fieldName: keyof Course, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempCourse = { ...this.courseList[index], [fieldName]: value };
      this.update(index, tempCourse);
    }
  }

  update(index: number, course: Course): void {
    this.courseService.editCourse(index, course);
  }
}
