import { Component } from '@angular/core';
import { Building } from '../types';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css',
})
export class BuildingListComponent {
  buildingList: Building[] = [];

  name: string = '';

  add() {
    this.buildingList.push({
      name: this.name,
    });
    this.name = '';
  }
}
