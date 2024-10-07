import { Component, OnInit } from '@angular/core';
import { LaptopSpecificationService } from '../services/laptop-specification.service';
import { LaptopSpecification } from '../types';

@Component({
  selector: 'app-laptop-specification',
  templateUrl: './laptop-specification-list.component.html',
  styleUrl: './laptop-specification-list.component.css',
})
export class LaptopSpecificationListComponent implements OnInit {
  specificationList: LaptopSpecification[] = [];
  specs: string = '';

  constructor(private specificationService: LaptopSpecificationService) {}

  ngOnInit(): void {
    this.specificationList = this.specificationService.getSpecificationList();
  }

  add(): void {
    if (this.specs) {
      this.specificationService.addSpecification({
        specs: this.specs,
      });

      this.specs = '';
    }
  }

  deleteSpecification(index: number): void {
    this.specificationService.deleteSpecification(index);
  }

  editField(
    index: number,
    fieldName: keyof LaptopSpecification,
    currentValue: string
  ) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempSpecification = {
        ...this.specificationList[index],
        [fieldName]: value,
      };
      this.update(index, tempSpecification);
    }
  }

  update(index: number, specification: LaptopSpecification): void {
    this.specificationService.editSpecification(index, specification);
  }
}
