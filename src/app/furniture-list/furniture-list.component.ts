import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../services/furniture.service';
import { Furniture } from '../types';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css',
})
export class FurnitureListComponent implements OnInit {
  furnitureList: Furniture[] = [];
  name: string = '';
  price: number | null = null;

  constructor(private furnitureService: FurnitureService) {}

  ngOnInit(): void {
    this.furnitureList = this.furnitureService.getFurnitureList();
  }

  add(): void {
    if (this.name && this.price !== null) {
      this.furnitureService.addFurniture({
        name: this.name,
        price: this.price,
      });

      this.name = '';
      this.price = null;
    }
  }

  deleteFurniture(index: number): void {
    this.furnitureService.deleteFurniture(index);
  }

  editField(
    index: number,
    fieldName: keyof Furniture,
    currentValue: string | number
  ) {
    const value = prompt(`Edit ${fieldName}`, currentValue.toString());
    if (value !== null) {
      const tempFurniture = {
        ...this.furnitureList[index],
        [fieldName]: value,
      };
      this.update(index, tempFurniture);
    }
  }

  update(index: number, furniture: Furniture): void {
    this.furnitureService.editFurniture(index, furniture);
  }
}
