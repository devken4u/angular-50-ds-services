import { Component } from '@angular/core';
import { Fruit } from '../types';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css',
})
export class FruitListComponent {
  fruitList: Fruit[] = [];

  name: string = '';

  add() {
    this.fruitList.push({
      name: this.name,
    });
    this.name = '';
  }
}
