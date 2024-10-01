import { Component } from '@angular/core';
import { ComputerHardware } from '../types';

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css',
})
export class ComputerHardwareListComponent {
  hardwareList: ComputerHardware[] = [];

  name: string = '';

  add() {
    this.hardwareList.push({
      name: this.name,
    });
    this.name = '';
  }
}
