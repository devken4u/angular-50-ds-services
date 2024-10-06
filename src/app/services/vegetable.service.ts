import { Injectable } from '@angular/core';
import { Vegetable } from '../types';

@Injectable({
  providedIn: 'root',
})
export class VegetableService {
  private vegetableList: Vegetable[] = [
    {
      name: 'Carrot',
    },
  ];

  getVegetableList() {
    return this.vegetableList;
  }

  addVegetable(vegetable: Vegetable): void {
    this.vegetableList.push(vegetable);
  }

  deleteVegetable(index: number): void {
    this.vegetableList.splice(index, 1);
  }

  editVegetable(index: number, newVegetable: Vegetable) {
    this.vegetableList[index] = newVegetable;
  }
}
