import { Component } from '@angular/core';
import { Vegetable } from '../types';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css',
})
export class VegetableListComponent {
  vegetableList: Vegetable[] = [];

  name: string = '';

  add() {
    this.vegetableList.push({
      name: this.name,
    });
    this.name = '';
  }
}
