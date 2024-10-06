import { Injectable } from '@angular/core';
import { Fruit } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  private fruitList: Fruit[] = [
    {
      name: 'Apple',
    },
    {
      name: 'Banana',
    },
  ];

  getFruitList() {
    return this.fruitList;
  }

  addFruit(fruit: Fruit): void {
    this.fruitList.push(fruit);
  }

  deleteFruit(index: number): void {
    this.fruitList.splice(index, 1);
  }

  editFruit(index: number, newFruit: Fruit) {
    this.fruitList[index] = newFruit;
  }
}
