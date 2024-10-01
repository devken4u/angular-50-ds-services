import { Component } from '@angular/core';
import { DeveloperTool } from '../types';

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrl: './developer-tools-list.component.css',
})
export class DeveloperToolsListComponent {
  developerToolList: DeveloperTool[] = [];

  name: string = '';

  add() {
    this.developerToolList.push({
      name: this.name,
    });
    this.name = '';
  }
}
