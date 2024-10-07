import { Injectable } from '@angular/core';
import { Software } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SoftwareService {
  private softwareList: Software[] = [
    {
      name: 'Photoshop',
    },
    {
      name: 'VS Code',
    },
  ];

  getSoftwareList() {
    return this.softwareList;
  }

  addSoftware(software: Software): void {
    this.softwareList.push(software);
  }

  deleteSoftware(index: number): void {
    this.softwareList.splice(index, 1);
  }

  editSoftware(index: number, newSoftware: Software) {
    this.softwareList[index] = newSoftware;
  }
}
