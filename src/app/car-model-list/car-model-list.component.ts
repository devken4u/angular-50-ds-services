import { Component, OnInit } from '@angular/core';
import { CarModelService } from '../services/car-model.service';
import { CarModel } from '../types';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css',
})
export class CarModelListComponent implements OnInit {
  carModelList: CarModel[] = [];
  name: string = '';
  year: number | null = null;

  constructor(private carModelService: CarModelService) {}

  ngOnInit(): void {
    this.carModelList = this.carModelService.getCarModelList();
  }

  add(): void {
    if (this.name && this.year !== null) {
      this.carModelService.addCarModel({ name: this.name, year: this.year });
      this.name = '';
      this.year = null;
    }
  }

  deleteCarModel(index: number): void {
    this.carModelService.deleteCarModel(index);
  }

  editField(index: number, fieldName: string, currentValue: any) {
    const value = prompt(fieldName, currentValue);
    if (value !== null) {
      const tempCarModel = {
        ...this.carModelList[index],
        [fieldName]: fieldName === 'year' ? Number(value) : value,
      };
      this.update(index, tempCarModel);
    }
  }

  update(index: number, carModel: CarModel): void {
    this.carModelService.editCarModel(index, carModel);
  }
}
