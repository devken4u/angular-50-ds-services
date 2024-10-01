import { Component } from '@angular/core';
import { Exercise } from '../types';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css',
})
export class ExerciseListComponent {
  exerciseList: Exercise[] = [];

  name: string = '';
  repetitions: number = 0;

  add() {
    this.exerciseList.push({
      name: this.name,
      repetitions: this.repetitions,
    });
    this.name = '';
    this.repetitions = 0;
  }
}
