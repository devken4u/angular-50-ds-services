import { Injectable } from '@angular/core';
import { Laptop } from '../types';

@Injectable({
  providedIn: 'root',
})
export class LaptopService {
  private laptopList: Laptop[] = [
    {
      model: 'Dell',
      price: 999,
    },
    {
      model: 'MacBook',
      price: 1299,
    },
  ];

  getLaptopList() {
    return this.laptopList;
  }

  addLaptop(laptop: Laptop): void {
    this.laptopList.push(laptop);
  }

  deleteLaptop(index: number): void {
    this.laptopList.splice(index, 1);
  }

  editLaptop(index: number, newLaptop: Laptop) {
    this.laptopList[index] = newLaptop;
  }
}
