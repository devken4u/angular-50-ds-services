import { Component } from '@angular/core';
import { Furniture } from '../types';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css',
})
export class FurnitureListComponent {
  furnitureList: Furniture[] = [];

  name: string = '';
  price: number = 0;

  add() {
    this.furnitureList.push({
      name: this.name,
      price: this.price,
    });
    this.name = '';
    this.price = 0;
  }
}
