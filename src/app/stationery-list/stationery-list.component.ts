import { Component } from '@angular/core';
import { Stationery } from '../types';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css',
})
export class StationeryListComponent {
  stationeryList: Stationery[] = [];

  name: string = '';

  add() {
    this.stationeryList.push({
      name: this.name,
    });
    this.name = '';
  }
}
