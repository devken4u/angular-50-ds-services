import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { Inventory } from '../types';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css',
})
export class InventoryListComponent implements OnInit {
  inventoryList: Inventory[] = [];
  name: string = '';
  quantity: number | null = null;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryList = this.inventoryService.getInventoryList();
  }

  add(): void {
    if (this.name && this.quantity !== null) {
      this.inventoryService.addInventoryItem({
        name: this.name,
        quantity: this.quantity,
      });

      this.name = '';
      this.quantity = null;
    }
  }

  deleteItem(index: number): void {
    this.inventoryService.deleteInventoryItem(index);
  }

  editField(index: number, fieldName: keyof Inventory, currentValue: any) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempItem = {
        ...this.inventoryList[index],
        [fieldName]: fieldName === 'quantity' ? parseInt(value) : value,
      };
      this.update(index, tempItem);
    }
  }

  update(index: number, item: Inventory): void {
    this.inventoryService.editInventoryItem(index, item);
  }
}
