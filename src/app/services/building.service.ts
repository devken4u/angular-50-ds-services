import { Injectable } from '@angular/core';
import { Building } from '../types';

@Injectable({
  providedIn: 'root',
})
export class BuildingService {
  private buildingList: Building[] = [
    {
      name: 'Library',
    },
    {
      name: 'Gymnasium',
    },
  ];

  getBuildingList() {
    return this.buildingList;
  }

  addBuilding(building: Building): void {
    this.buildingList.push(building);
  }

  deleteBuilding(index: number): void {
    this.buildingList.splice(index, 1);
  }

  editBuilding(index: number, newBuilding: Building) {
    this.buildingList[index] = newBuilding;
  }
}
