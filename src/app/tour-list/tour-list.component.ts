import { Component } from '@angular/core';
import { Tour } from '../types';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css',
})
export class TourListComponent {
  tourList: Tour[] = [];

  place: string = '';
  date: string = '';

  add() {
    this.tourList.push({
      place: this.place,
      date: this.date,
    });
    this.place = '';
    this.date = '';
  }
}
