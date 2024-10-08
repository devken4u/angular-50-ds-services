import { Injectable } from '@angular/core';
import { DeveloperTool } from '../types';

@Injectable({
  providedIn: 'root',
})
export class DeveloperToolService {
  private toolList: DeveloperTool[] = [
    {
      name: 'Visual Studio Code',
    },
    {
      name: 'Git',
    },
  ];

  getToolList(): DeveloperTool[] {
    return this.toolList;
  }

  addTool(tool: DeveloperTool): void {
    this.toolList.push(tool);
  }

  deleteTool(index: number): void {
    this.toolList.splice(index, 1);
  }

  editTool(index: number, newTool: DeveloperTool): void {
    this.toolList[index] = newTool;
  }
}
