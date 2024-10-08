import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../types';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css'],
})
export class ExerciseListComponent implements OnInit {
  exerciseList: Exercise[] = [];
  name: string = '';
  repetitions: number = 0;

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit(): void {
    this.exerciseList = this.exerciseService.getExerciseList();
  }

  add(): void {
    if (this.name && this.repetitions > 0) {
      this.exerciseService.addExercise({
        name: this.name,
        repetitions: this.repetitions,
      });
      this.name = '';
      this.repetitions = 0;
    }
  }

  deleteExercise(index: number): void {
    this.exerciseService.deleteExercise(index);
  }

  editField(index: number, fieldName: keyof Exercise, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const updatedExercise = {
        ...this.exerciseList[index],
        [fieldName]: fieldName === 'repetitions' ? parseInt(value, 10) : value,
      };
      this.update(index, updatedExercise);
    }
  }

  update(index: number, exercise: Exercise): void {
    this.exerciseService.editExercise(index, exercise);
  }
}
