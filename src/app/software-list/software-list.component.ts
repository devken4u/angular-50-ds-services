import { Component } from '@angular/core';
import { Software } from '../types';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css',
})
export class SoftwareListComponent {
  softwareList: Software[] = [];

  name: string = '';

  add() {
    this.softwareList.push({
      name: this.name,
    });
    this.name = '';
  }
}
