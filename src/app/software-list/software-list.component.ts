import { Component, OnInit } from '@angular/core';
import { SoftwareService } from '../services/software.service';
import { Software } from '../types';

@Component({
  selector: 'app-software',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css',
})
export class SoftwareListComponent implements OnInit {
  softwareList: Software[] = [];
  name: string = '';

  constructor(private softwareService: SoftwareService) {}

  ngOnInit(): void {
    this.softwareList = this.softwareService.getSoftwareList();
  }

  add(): void {
    if (this.name) {
      this.softwareService.addSoftware({
        name: this.name,
      });

      this.name = '';
    }
  }

  deleteSoftware(index: number): void {
    this.softwareService.deleteSoftware(index);
  }

  editField(index: number, fieldName: keyof Software, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempSoftware = { ...this.softwareList[index], [fieldName]: value };
      this.update(index, tempSoftware);
    }
  }

  update(index: number, software: Software): void {
    this.softwareService.editSoftware(index, software);
  }
}
