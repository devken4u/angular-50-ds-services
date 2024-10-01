import { Component } from '@angular/core';
import { Laptop } from '../types';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css',
})
export class LaptopListComponent {
  laptopList: Laptop[] = [];

  model: string = '';
  price: number = 0;

  add() {
    this.laptopList.push({
      model: this.model,
      price: this.price,
    });
    this.model = '';
    this.price = 0;
  }
}
