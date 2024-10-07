import { Injectable } from '@angular/core';
import { Destination } from '../types';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  private destinationList: Destination[] = [
    {
      place: 'Paris',
      country: 'France',
    },
    {
      place: 'Tokyo',
      country: 'Japan',
    },
  ];

  getDestinationList() {
    return this.destinationList;
  }

  addDestination(destination: Destination): void {
    this.destinationList.push(destination);
  }

  deleteDestination(index: number): void {
    this.destinationList.splice(index, 1);
  }

  editDestination(index: number, newDestination: Destination) {
    this.destinationList[index] = newDestination;
  }
}
