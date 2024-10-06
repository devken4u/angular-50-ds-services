import { Component } from '@angular/core';
import { Tool } from '../types';
import { ToolService } from '../services/tool.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tools-list.component.html',
  styleUrl: './tools-list.component.css',
})
export class ToolsListComponent {
  toolList: Tool[] = [];

  name: string = '';
  price: number | null = null;

  constructor(private toolService: ToolService) {}

  ngOnInit(): void {
    this.toolList = this.toolService.getToolList();
  }

  deleteTool(index: number): void {
    this.toolService.deleteTool(index);
  }

  add(): void {
    if (this.price !== null) {
      this.toolService.addTool({
        name: this.name,
        price: this.price,
      });

      this.name = '';
      this.price = null;
    }
  }

  editField(index: number, fieldName: string, currentValue: any) {
    const value = prompt(fieldName, currentValue);
    if (value !== null) {
      const updatedValue = fieldName === 'price' ? parseFloat(value) : value;
      const tempTool = { ...this.toolList[index], [fieldName]: updatedValue };
      this.update(index, tempTool);
    }
  }

  update(index: number, tool: Tool): void {
    this.toolService.editTool(index, tool);
  }
}
