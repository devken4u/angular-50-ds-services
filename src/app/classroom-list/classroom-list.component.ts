import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../services/classroom.service';
import { Classroom } from '../types';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css',
})
export class ClassroomListComponent implements OnInit {
  classroomList: Classroom[] = [];
  name: string = '';
  roomNumber: number | null = null;

  constructor(private classroomService: ClassroomService) {}

  ngOnInit(): void {
    this.classroomList = this.classroomService.getClassroomList();
  }

  add(): void {
    if (this.name && this.roomNumber !== null) {
      this.classroomService.addClassroom({
        name: this.name,
        roomNumber: this.roomNumber,
      });

      this.name = '';
      this.roomNumber = null;
    }
  }

  deleteClassroom(index: number): void {
    this.classroomService.deleteClassroom(index);
  }

  editField(index: number, fieldName: keyof Classroom, currentValue: any) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempClassroom = {
        ...this.classroomList[index],
        [fieldName]: fieldName === 'roomNumber' ? parseInt(value) : value,
      };
      this.update(index, tempClassroom);
    }
  }

  update(index: number, classroom: Classroom): void {
    this.classroomService.editClassroom(index, classroom);
  }
}
