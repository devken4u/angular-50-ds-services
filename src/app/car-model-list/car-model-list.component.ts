import { Component } from '@angular/core';
import { CarModel } from '../types';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css',
})
export class CarModelListComponent {
  carModelList: CarModel[] = [];

  name: string = '';
  year: number = 0;

  add() {
    this.carModelList.push({
      name: this.name,
      year: this.year,
    });
    this.name = '';
    this.year = 0;
  }
}
