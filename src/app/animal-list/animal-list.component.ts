import { Component } from '@angular/core';
import { Animal } from '../types';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css',
})
export class AnimalListComponent {
  animalList: Animal[] = [];

  name: string = '';

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalList = this.animalService.getAnimalList();
  }

  deleteAnimal(index: number): void {
    this.animalService.deleteAnimal(index);
  }

  add(): void {
    this.animalService.addAnimal({
      name: this.name,
    });

    this.name = '';
  }

  editField(index: number, fieldName: string, currentValue: string) {
    const value = prompt(fieldName, currentValue);
    if (value !== null) {
      const tempAnimal = { ...this.animalList[index], [fieldName]: value };
      this.update(index, tempAnimal);
    }
  }

  update(index: number, animal: Animal): void {
    this.animalService.editAnimal(index, animal);
  }
}
