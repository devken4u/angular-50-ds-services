import { Component } from '@angular/core';
import { Vegetable } from '../types';
import { VegetableService } from '../services/vegetable.service';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css',
})
export class VegetableListComponent {
  vegetableList: Vegetable[] = [];

  name: string = '';

  constructor(private vegetableService: VegetableService) {}

  ngOnInit(): void {
    this.vegetableList = this.vegetableService.getVegetableList();
  }

  deleteVegetable(index: number): void {
    this.vegetableService.deleteVegetable(index);
  }

  add(): void {
    this.vegetableService.addVegetable({
      name: this.name,
    });

    this.name = '';
  }

  editField(index: number, fieldName: string, currentValue: string) {
    const value = prompt(fieldName, currentValue);
    if (value !== null) {
      const tempVegetable = {
        ...this.vegetableList[index],
        [fieldName]: value,
      };
      this.update(index, tempVegetable);
    }
  }

  update(index: number, vegetable: Vegetable): void {
    this.vegetableService.editVegetable(index, vegetable);
  }
}
