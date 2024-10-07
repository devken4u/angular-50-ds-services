import { Injectable } from '@angular/core';
import { Inventory } from '../types';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private inventoryList: Inventory[] = [
    {
      name: 'Pencil',
      quantity: 100,
    },
    {
      name: 'Notebook',
      quantity: 50,
    },
  ];

  getInventoryList() {
    return this.inventoryList;
  }

  addInventoryItem(item: Inventory): void {
    this.inventoryList.push(item);
  }

  deleteInventoryItem(index: number): void {
    this.inventoryList.splice(index, 1);
  }

  editInventoryItem(index: number, newItem: Inventory) {
    this.inventoryList[index] = newItem;
  }
}
