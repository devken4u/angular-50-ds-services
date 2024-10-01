import { Component } from '@angular/core';
import { Classroom } from '../types';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css',
})
export class ClassroomListComponent {
  studentList: Classroom[] = [];

  name: string = '';
  roomNumber: number = 0;

  add() {
    this.studentList.push({
      name: this.name,
      roomNumber: this.roomNumber,
    });
    this.name = '';
    this.roomNumber = 0;
  }
}
