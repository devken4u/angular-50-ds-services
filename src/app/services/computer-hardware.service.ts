import { Injectable } from '@angular/core';
import { ComputerHardware } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ComputerHardwareService {
  private hardwareList: ComputerHardware[] = [
    {
      name: 'Graphics Card',
    },
    {
      name: 'Motherboard',
    },
  ];

  getHardwareList() {
    return this.hardwareList;
  }

  addHardware(hardware: ComputerHardware): void {
    this.hardwareList.push(hardware);
  }

  deleteHardware(index: number): void {
    this.hardwareList.splice(index, 1);
  }

  editHardware(index: number, newHardware: ComputerHardware) {
    this.hardwareList[index] = newHardware;
  }
}
