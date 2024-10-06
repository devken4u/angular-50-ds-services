// car-model.service.ts
import { Injectable } from '@angular/core';
import { CarModel } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CarModelService {
  private carModelList: CarModel[] = [{ name: 'Ford Mustang', year: 2021 }];

  getCarModelList() {
    return this.carModelList;
  }

  addCarModel(carModel: CarModel): void {
    this.carModelList.push(carModel);
  }

  deleteCarModel(index: number): void {
    this.carModelList.splice(index, 1);
  }

  editCarModel(index: number, newCarModel: CarModel) {
    this.carModelList[index] = newCarModel;
  }
}
