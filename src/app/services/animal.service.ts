import { Injectable } from '@angular/core';
import { Animal } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private animalList: Animal[] = [
    {
      name: 'Dog',
    },
  ];

  getAnimalList() {
    return this.animalList;
  }

  addAnimal(animal: Animal): void {
    this.animalList.push(animal);
  }

  deleteAnimal(index: number): void {
    this.animalList.splice(index, 1);
  }

  editAnimal(index: number, newAnimal: Animal) {
    this.animalList[index] = newAnimal;
  }
}
