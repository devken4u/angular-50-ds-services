import { Component } from '@angular/core';
import { Subject } from '../types';

@Component({
  selector: 'app-subject-list',

  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css',
})
export class SubjectListComponent {
  subjectList: Subject[] = [];

  name: string = '';
  time: string = '';

  add() {
    this.subjectList.push({
      name: this.name,
      time: this.time,
    });
    this.name = '';
    this.time = '';
  }
}
