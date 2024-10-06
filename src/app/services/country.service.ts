// country.service.ts
import { Injectable } from '@angular/core';
import { Country } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private countryList: Country[] = [
    { name: 'USA' },
    { name: 'Canada' },
    { name: 'Japan' },
  ];

  getCountryList() {
    return this.countryList;
  }

  addCountry(country: Country): void {
    this.countryList.push(country);
  }

  deleteCountry(index: number): void {
    this.countryList.splice(index, 1);
  }

  editCountry(index: number, newCountry: Country) {
    this.countryList[index] = newCountry;
  }
}
