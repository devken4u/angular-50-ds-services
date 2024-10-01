import { Component } from '@angular/core';
import { Destination } from '../types';

@Component({
  selector: 'app-destionation-list',
  templateUrl: './destionation-list.component.html',
  styleUrl: './destionation-list.component.css',
})
export class DestionationListComponent {
  destinationList: Destination[] = [];

  place: string = '';
  country: string = '';

  add() {
    this.destinationList.push({
      place: this.place,
      country: this.country,
    });
    this.place = '';
    this.country = '';
  }
}
