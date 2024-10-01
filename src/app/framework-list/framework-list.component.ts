import { Component } from '@angular/core';
import { Framework } from '../types';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css',
})
export class FrameworkListComponent {
  frameworkList: Framework[] = [];

  name: string = '';
  version: string = '';

  add() {
    this.frameworkList.push({
      name: this.name,
      version: this.version,
    });
    this.name = '';
    this.version = '';
  }
}
