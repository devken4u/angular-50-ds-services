// city.service.ts
import { Injectable } from '@angular/core';
import { City } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private cityList: City[] = [
    { city: 'New York' },
    { city: 'Los Angeles' },
    { city: 'Chicago' },
  ];

  getCityList() {
    return this.cityList;
  }

  addCity(city: City): void {
    this.cityList.push(city);
  }

  deleteCity(index: number): void {
    this.cityList.splice(index, 1);
  }

  editCity(index: number, newCity: City) {
    this.cityList[index] = newCity;
  }
}
