import { Component, OnInit } from '@angular/core';
import { Country } from '../types';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
})
export class CountryListComponent implements OnInit {
  countryList: Country[] = [];
  name: string = '';

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryList = this.countryService.getCountryList();
  }

  add(): void {
    this.countryService.addCountry({
      name: this.name,
    });
    this.name = '';
  }

  editField(index: number, fieldName: string, currentValue: string) {
    const value = prompt(fieldName, currentValue);
    if (value !== null) {
      const tempCountry = { ...this.countryList[index], [fieldName]: value };
      this.update(index, tempCountry);
    }
  }

  update(index: number, country: Country): void {
    this.countryService.editCountry(index, country);
  }

  deleteCountry(index: number): void {
    this.countryService.deleteCountry(index);
  }
}
