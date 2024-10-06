// city.component.ts
import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { City } from '../types';

@Component({
  selector: 'app-city',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css',
})
export class CityListComponent implements OnInit {
  cityList: City[] = [];
  city: string = '';

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cityList = this.cityService.getCityList();
  }

  add(): void {
    if (this.city) {
      this.cityService.addCity({ city: this.city });
      this.city = '';
    }
  }

  deleteCity(index: number): void {
    this.cityService.deleteCity(index);
  }

  editField(index: number, currentValue: string) {
    const value = prompt('Edit City', currentValue);
    if (value !== null) {
      const tempCity = { city: value };
      this.update(index, tempCity);
    }
  }

  update(index: number, city: City): void {
    this.cityService.editCity(index, city);
  }
}
