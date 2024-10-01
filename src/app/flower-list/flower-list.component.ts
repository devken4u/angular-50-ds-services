import { Component } from '@angular/core';
import { Flower } from '../types';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css',
})
export class FlowerListComponent {
  flowerList: Flower[] = [];

  name: string = '';

  add() {
    this.flowerList.push({
      name: this.name,
    });
    this.name = '';
  }
}
