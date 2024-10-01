import { Component } from '@angular/core';
import { City } from '../types';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css',
})
export class CityListComponent {
  cityList: City[] = [];

  city: string = '';

  add() {
    this.cityList.push({
      city: this.city,
    });
    this.city = '';
  }
}
