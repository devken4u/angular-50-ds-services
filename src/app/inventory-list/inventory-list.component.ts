import { Component } from '@angular/core';
import { Inventory } from '../types';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css',
})
export class InventoryListComponent {
  inventoryList: Inventory[] = [];

  name: string = '';
  quantity: number = 0;

  add() {
    this.inventoryList.push({
      name: this.name,
      quantity: this.quantity,
    });
    this.name = '';
    this.quantity = 0;
  }
}
