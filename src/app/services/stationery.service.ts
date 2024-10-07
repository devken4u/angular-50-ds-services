import { Injectable } from '@angular/core';
import { Stationery } from '../types';

@Injectable({
  providedIn: 'root',
})
export class StationeryService {
  private stationeryList: Stationery[] = [
    {
      name: 'Pencil',
    },
    {
      name: 'Notebook',
    },
  ];

  getStationeryList() {
    return this.stationeryList;
  }

  addStationery(stationery: Stationery): void {
    this.stationeryList.push(stationery);
  }

  deleteStationery(index: number): void {
    this.stationeryList.splice(index, 1);
  }

  editStationery(index: number, newStationery: Stationery) {
    this.stationeryList[index] = newStationery;
  }
}
