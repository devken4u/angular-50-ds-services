import { Component } from '@angular/core';
import { Animal } from '../types';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css',
})
export class AnimalListComponent {
  animalList: Animal[] = [];

  name: string = '';

  add() {
    this.animalList.push({
      name: this.name,
    });
    this.name = '';
  }
}
