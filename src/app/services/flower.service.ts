import { Injectable } from '@angular/core';
import { Flower } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  private flowerList: Flower[] = [
    {
      name: 'Rose',
    },
    {
      name: 'Tulip',
    },
  ];

  getFlowerList() {
    return this.flowerList;
  }

  addFlower(flower: Flower): void {
    this.flowerList.push(flower);
  }

  deleteFlower(index: number): void {
    this.flowerList.splice(index, 1);
  }

  editFlower(index: number, newFlower: Flower) {
    this.flowerList[index] = newFlower;
  }
}
