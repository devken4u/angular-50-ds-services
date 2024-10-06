import { Injectable } from '@angular/core';
import { Tool } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ToolService {
  private toolList: Tool[] = [
    {
      name: 'Hammer',
      price: 25,
    },
  ];

  getToolList() {
    return this.toolList;
  }

  addTool(tool: Tool): void {
    this.toolList.push(tool);
  }

  deleteTool(index: number): void {
    this.toolList.splice(index, 1);
  }

  editTool(index: number, newTool: Tool) {
    this.toolList[index] = newTool;
  }
}
