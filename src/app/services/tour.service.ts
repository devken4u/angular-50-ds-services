import { Injectable } from '@angular/core';
import { Tour } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  private tourList: Tour[] = [
    {
      place: 'Paris',
      date: '2024-06-12',
    },
    {
      place: 'Tokyo',
      date: '2024-09-15',
    },
  ];

  getTourList(): Tour[] {
    return this.tourList;
  }

  addTour(tour: Tour): void {
    this.tourList.push(tour);
  }

  deleteTour(index: number): void {
    this.tourList.splice(index, 1);
  }

  editTour(index: number, newTour: Tour): void {
    this.tourList[index] = newTour;
  }
}
