import { Injectable } from '@angular/core';
import { Lecture } from '../types';

@Injectable({
  providedIn: 'root',
})
export class LectureService {
  private lectureList: Lecture[] = [
    {
      name: 'Introduction to Programming',
      course: 'CS101',
    },
    {
      name: 'Data Structures',
      course: 'CS102',
    },
  ];

  getLectureList() {
    return this.lectureList;
  }

  addLecture(lecture: Lecture): void {
    this.lectureList.push(lecture);
  }

  deleteLecture(index: number): void {
    this.lectureList.splice(index, 1);
  }

  editLecture(index: number, newLecture: Lecture) {
    this.lectureList[index] = newLecture;
  }
}
