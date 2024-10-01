import { Component } from '@angular/core';
import { Country } from '../types';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
})
export class CountryListComponent {
  countryList: Country[] = [];

  name: string = '';

  add() {
    this.countryList.push({
      name: this.name,
    });
    this.name = '';
  }
}
