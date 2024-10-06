import { Component, OnInit } from '@angular/core';
import { FruitService } from '../services/fruit.service';
import { Fruit } from '../types';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css',
})
export class FruitListComponent implements OnInit {
  fruitList: Fruit[] = [];
  name: string = '';

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.fruitList = this.fruitService.getFruitList();
  }

  add(): void {
    if (this.name) {
      this.fruitService.addFruit({
        name: this.name,
      });

      this.name = '';
    }
  }

  deleteFruit(index: number): void {
    this.fruitService.deleteFruit(index);
  }

  editField(index: number, fieldName: keyof Fruit, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempFruit = { ...this.fruitList[index], [fieldName]: value };
      this.update(index, tempFruit);
    }
  }

  update(index: number, fruit: Fruit): void {
    this.fruitService.editFruit(index, fruit);
  }
}
