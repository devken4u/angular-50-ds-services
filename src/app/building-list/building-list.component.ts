import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../services/building.service';
import { Building } from '../types';

@Component({
  selector: 'app-building',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css',
})
export class BuildingListComponent implements OnInit {
  buildingList: Building[] = [];
  name: string = '';

  constructor(private buildingService: BuildingService) {}

  ngOnInit(): void {
    this.buildingList = this.buildingService.getBuildingList();
  }

  add(): void {
    if (this.name) {
      this.buildingService.addBuilding({
        name: this.name,
      });

      this.name = '';
    }
  }

  deleteBuilding(index: number): void {
    this.buildingService.deleteBuilding(index);
  }

  editField(index: number, fieldName: keyof Building, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempBuilding = { ...this.buildingList[index], [fieldName]: value };
      this.update(index, tempBuilding);
    }
  }

  update(index: number, building: Building): void {
    this.buildingService.editBuilding(index, building);
  }
}
