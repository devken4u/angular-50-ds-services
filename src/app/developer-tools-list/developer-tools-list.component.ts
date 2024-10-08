import { Component, OnInit } from '@angular/core';
import { DeveloperToolService } from '../services/developer-tool.service';
import { DeveloperTool } from '../types';

@Component({
  selector: 'app-developer-tool-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrls: ['./developer-tools-list.component.css'],
})
export class DeveloperToolsListComponent implements OnInit {
  toolList: DeveloperTool[] = [];
  toolName: string = '';

  constructor(private developerToolService: DeveloperToolService) {}

  ngOnInit(): void {
    this.toolList = this.developerToolService.getToolList();
  }

  add(): void {
    if (this.toolName) {
      this.developerToolService.addTool({
        name: this.toolName,
      });
      this.toolName = '';
    }
  }

  deleteTool(index: number): void {
    this.developerToolService.deleteTool(index);
  }

  editField(
    index: number,
    fieldName: keyof DeveloperTool,
    currentValue: string
  ) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null && value !== '') {
      const updatedTool = {
        ...this.toolList[index],
        [fieldName]: value,
      };
      this.update(index, updatedTool);
    }
  }

  update(index: number, tool: DeveloperTool): void {
    this.developerToolService.editTool(index, tool);
  }
}
