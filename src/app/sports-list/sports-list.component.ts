import { Component } from '@angular/core';
import { Sport } from '../types';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css',
})
export class SportsListComponent {
  sportList: Sport[] = [];

  name: string = '';

  add() {
    this.sportList.push({
      name: this.name,
    });
    this.name = '';
  }
}
