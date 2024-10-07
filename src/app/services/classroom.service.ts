import { Injectable } from '@angular/core';
import { Classroom } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ClassroomService {
  private classroomList: Classroom[] = [
    {
      name: 'Math 101',
      roomNumber: 101,
    },
    {
      name: 'Science 102',
      roomNumber: 102,
    },
  ];

  getClassroomList() {
    return this.classroomList;
  }

  addClassroom(classroom: Classroom): void {
    this.classroomList.push(classroom);
  }

  deleteClassroom(index: number): void {
    this.classroomList.splice(index, 1);
  }

  editClassroom(index: number, newClassroom: Classroom) {
    this.classroomList[index] = newClassroom;
  }
}
