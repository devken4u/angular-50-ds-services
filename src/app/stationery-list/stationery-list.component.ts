import { Component, OnInit } from '@angular/core';
import { StationeryService } from '../services/stationery.service';
import { Stationery } from '../types';

@Component({
  selector: 'app-stationery',
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css',
})
export class StationeryListComponent implements OnInit {
  stationeryList: Stationery[] = [];
  name: string = '';

  constructor(private stationeryService: StationeryService) {}

  ngOnInit(): void {
    this.stationeryList = this.stationeryService.getStationeryList();
  }

  add(): void {
    if (this.name) {
      this.stationeryService.addStationery({
        name: this.name,
      });

      this.name = '';
    }
  }

  deleteStationery(index: number): void {
    this.stationeryService.deleteStationery(index);
  }

  editField(index: number, fieldName: keyof Stationery, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempStationery = { ...this.stationeryList[index], [fieldName]: value };
      this.update(index, tempStationery);
    }
  }

  update(index: number, stationery: Stationery): void {
    this.stationeryService.editStationery(index, stationery);
  }
}
