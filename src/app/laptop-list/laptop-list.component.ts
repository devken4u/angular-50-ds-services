import { Component, OnInit } from '@angular/core';
import { LaptopService } from '../services/laptop.service';
import { Laptop } from '../types';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css',
})
export class LaptopListComponent implements OnInit {
  laptopList: Laptop[] = [];
  model: string = '';
  price: number = 0;

  constructor(private laptopService: LaptopService) {}

  ngOnInit(): void {
    this.laptopList = this.laptopService.getLaptopList();
  }

  add(): void {
    if (this.model && this.price > 0) {
      this.laptopService.addLaptop({
        model: this.model,
        price: this.price,
      });

      this.model = '';
      this.price = 0;
    }
  }

  deleteLaptop(index: number): void {
    this.laptopService.deleteLaptop(index);
  }

  editField(index: number, fieldName: keyof Laptop, currentValue: string | number) {
    const value = prompt(`Edit ${fieldName}`, currentValue.toString());
    if (value !== null) {
      const tempLaptop = { ...this.laptopList[index], [fieldName]: fieldName === 'price' ? Number(value) : value };
      this.update(index, tempLaptop);
    }
  }

  update(index: number, laptop: Laptop): void {
    this.laptopService.editLaptop(index, laptop);
  }
}
