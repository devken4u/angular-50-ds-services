import { Component } from '@angular/core';
import { LaptopSpecification } from '../types';

@Component({
  selector: 'app-laptop-specification-list',
  templateUrl: './laptop-specification-list.component.html',
  styleUrl: './laptop-specification-list.component.css',
})
export class LaptopSpecificationListComponent {
  specificationList: LaptopSpecification[] = [];

  specs: string = '';

  add() {
    this.specificationList.push({
      specs: this.specs,
    });
    this.specs = '';
  }
}
