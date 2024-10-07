import { Component, OnInit } from '@angular/core';
import { ComputerHardwareService } from '../services/computer-hardware.service';
import { ComputerHardware } from '../types';

@Component({
  selector: 'app-computer-hardware',
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css',
})
export class ComputerHardwareListComponent implements OnInit {
  hardwareList: ComputerHardware[] = [];
  name: string = '';

  constructor(private hardwareService: ComputerHardwareService) {}

  ngOnInit(): void {
    this.hardwareList = this.hardwareService.getHardwareList();
  }

  add(): void {
    if (this.name) {
      this.hardwareService.addHardware({
        name: this.name,
      });

      this.name = '';
    }
  }

  deleteHardware(index: number): void {
    this.hardwareService.deleteHardware(index);
  }

  editField(
    index: number,
    fieldName: keyof ComputerHardware,
    currentValue: string
  ) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempHardware = { ...this.hardwareList[index], [fieldName]: value };
      this.update(index, tempHardware);
    }
  }

  update(index: number, hardware: ComputerHardware): void {
    this.hardwareService.editHardware(index, hardware);
  }
}
