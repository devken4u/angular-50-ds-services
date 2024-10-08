import { Injectable } from '@angular/core';
import { Exercise } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exerciseList: Exercise[] = [
    {
      name: 'Push-Ups',
      repetitions: 20,
    },
    {
      name: 'Sit-Ups',
      repetitions: 30,
    },
  ];

  getExerciseList(): Exercise[] {
    return this.exerciseList;
  }

  addExercise(exercise: Exercise): void {
    this.exerciseList.push(exercise);
  }

  deleteExercise(index: number): void {
    this.exerciseList.splice(index, 1);
  }

  editExercise(index: number, newExercise: Exercise): void {
    this.exerciseList[index] = newExercise;
  }
}
