import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../services/flower.service';
import { Flower } from '../types';

@Component({
  selector: 'app-flower',
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css',
})
export class FlowerListComponent implements OnInit {
  flowerList: Flower[] = [];
  name: string = '';

  constructor(private flowerService: FlowerService) {}

  ngOnInit(): void {
    this.flowerList = this.flowerService.getFlowerList();
  }

  add(): void {
    if (this.name) {
      this.flowerService.addFlower({
        name: this.name,
      });

      this.name = '';
    }
  }

  deleteFlower(index: number): void {
    this.flowerService.deleteFlower(index);
  }

  editField(index: number, fieldName: keyof Flower, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempFlower = { ...this.flowerList[index], [fieldName]: value };
      this.update(index, tempFlower);
    }
  }

  update(index: number, flower: Flower): void {
    this.flowerService.editFlower(index, flower);
  }
}
