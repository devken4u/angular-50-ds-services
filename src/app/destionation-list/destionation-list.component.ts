import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../services/destination.service';
import { Destination } from '../types';

@Component({
  selector: 'app-destination',
  templateUrl: './destionation-list.component.html',
  styleUrl: './destionation-list.component.css',
})
export class DestionationListComponent implements OnInit {
  destinationList: Destination[] = [];
  place: string = '';
  country: string = '';

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationList = this.destinationService.getDestinationList();
  }

  add(): void {
    if (this.place && this.country) {
      this.destinationService.addDestination({
        place: this.place,
        country: this.country,
      });

      this.place = '';
      this.country = '';
    }
  }

  deleteDestination(index: number): void {
    this.destinationService.deleteDestination(index);
  }

  editField(index: number, fieldName: keyof Destination, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempDestination = {
        ...this.destinationList[index],
        [fieldName]: value,
      };
      this.update(index, tempDestination);
    }
  }

  update(index: number, destination: Destination): void {
    this.destinationService.editDestination(index, destination);
  }
}
