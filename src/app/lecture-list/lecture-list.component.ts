import { Component } from '@angular/core';
import { Lecture } from '../types';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css',
})
export class LectureListComponent {
  lectureList: Lecture[] = [];

  name: string = '';
  course: string = '';

  add() {
    this.lectureList.push({
      name: this.name,
      course: this.course,
    });
    this.name = '';
    this.course = '';
  }
}
