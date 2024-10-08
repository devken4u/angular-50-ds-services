import { Component, OnInit } from '@angular/core';
import { TourService } from '../services/tour.service';
import { Tour } from '../types';

@Component({
  selector: 'app-tour',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css'],
})
export class TourListComponent implements OnInit {
  tourList: Tour[] = [];
  place: string = '';
  date: string = '';

  constructor(private tourService: TourService) {}

  ngOnInit(): void {
    this.tourList = this.tourService.getTourList();
  }

  add(): void {
    if (this.place && this.date) {
      this.tourService.addTour({
        place: this.place,
        date: this.date,
      });
      this.place = '';
      this.date = '';
    }
  }

  deleteTour(index: number): void {
    this.tourService.deleteTour(index);
  }

  editField(index: number, fieldName: keyof Tour, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null && value !== '') {
      const updatedTour = {
        ...this.tourList[index],
        [fieldName]: value,
      };
      this.update(index, updatedTour);
    }
  }

  update(index: number, tour: Tour): void {
    this.tourService.editTour(index, tour);
  }
}
