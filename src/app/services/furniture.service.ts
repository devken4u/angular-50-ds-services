import { Injectable } from '@angular/core';
import { Furniture } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FurnitureService {
  private furnitureList: Furniture[] = [
    {
      name: 'Sofa',
      price: 300,
    },
    {
      name: 'Dining Table',
      price: 150,
    },
  ];

  getFurnitureList() {
    return this.furnitureList;
  }

  addFurniture(furniture: Furniture): void {
    this.furnitureList.push(furniture);
  }

  deleteFurniture(index: number): void {
    this.furnitureList.splice(index, 1);
  }

  editFurniture(index: number, newFurniture: Furniture) {
    this.furnitureList[index] = newFurniture;
  }
}
