import { Component, OnInit } from '@angular/core';
import { LectureService } from '../services/lecture.service';
import { Lecture } from '../types';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css',
})
export class LectureListComponent implements OnInit {
  lectureList: Lecture[] = [];
  name: string = '';
  course: string = '';

  constructor(private lectureService: LectureService) {}

  ngOnInit(): void {
    this.lectureList = this.lectureService.getLectureList();
  }

  add(): void {
    if (this.name && this.course) {
      this.lectureService.addLecture({
        name: this.name,
        course: this.course,
      });

      this.name = '';
      this.course = '';
    }
  }

  deleteLecture(index: number): void {
    this.lectureService.deleteLecture(index);
  }

  editField(index: number, fieldName: keyof Lecture, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempLecture = { ...this.lectureList[index], [fieldName]: value };
      this.update(index, tempLecture);
    }
  }

  update(index: number, lecture: Lecture): void {
    this.lectureService.editLecture(index, lecture);
  }
}
