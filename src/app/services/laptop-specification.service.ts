import { Injectable } from '@angular/core';
import { LaptopSpecification } from '../types';

@Injectable({
  providedIn: 'root',
})
export class LaptopSpecificationService {
  private specificationList: LaptopSpecification[] = [
    {
      specs: 'Intel i7, 16GB RAM, 512GB SSD',
    },
    {
      specs: 'AMD Ryzen 5, 8GB RAM, 256GB SSD',
    },
  ];

  getSpecificationList() {
    return this.specificationList;
  }

  addSpecification(specification: LaptopSpecification): void {
    this.specificationList.push(specification);
  }

  deleteSpecification(index: number): void {
    this.specificationList.splice(index, 1);
  }

  editSpecification(index: number, newSpecification: LaptopSpecification) {
    this.specificationList[index] = newSpecification;
  }
}
