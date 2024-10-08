import { Component, OnInit } from '@angular/core';
import { FrameworkService } from '../services/framework.service';
import { Framework } from '../types';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrls: ['./framework-list.component.css'],
})
export class FrameworkListComponent implements OnInit {
  frameworkList: Framework[] = [];
  frameworkName: string = '';
  frameworkVersion: string = '';

  constructor(private frameworkService: FrameworkService) {}

  ngOnInit(): void {
    this.frameworkList = this.frameworkService.getFrameworkList();
  }

  add(): void {
    if (this.frameworkName && this.frameworkVersion) {
      this.frameworkService.addFramework({
        name: this.frameworkName,
        version: this.frameworkVersion,
      });

      this.frameworkName = '';
      this.frameworkVersion = '';
    }
  }

  deleteFramework(index: number): void {
    this.frameworkService.deleteFramework(index);
  }

  editField(index: number, fieldName: keyof Framework, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null && value !== '') {
      const updatedFramework = {
        ...this.frameworkList[index],
        [fieldName]: value,
      };
      this.update(index, updatedFramework);
    }
  }

  update(index: number, framework: Framework): void {
    this.frameworkService.editFramework(index, framework);
  }
}
