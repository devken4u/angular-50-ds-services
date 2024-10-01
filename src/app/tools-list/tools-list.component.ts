import { Component } from '@angular/core';
import { Tool } from '../types';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrl: './tools-list.component.css',
})
export class ToolsListComponent {
  toolList: Tool[] = [];

  name: string = '';
  price: number = 0;

  add() {
    this.toolList.push({
      name: this.name,
      price: this.price,
    });
    this.name = '';
    this.price = 0;
  }
}
