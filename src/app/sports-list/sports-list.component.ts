import { Component } from '@angular/core';
import { Sport } from '../types';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css',
})
export class SportsListComponent {
  sportList: Sport[] = [];

  name: string = '';

  constructor(private sportService: SportService) {}

  ngOnInit(): void {
    this.sportList = this.sportService.getSportList();
  }

  deleteSport(index: number): void {
    this.sportService.deleteSport(index);
  }

  add(): void {
    this.sportService.addSport({
      name: this.name,
    });

    this.name = '';
  }

  editField(index: number, fieldName: string, currentValue: string) {
    const value = prompt(fieldName, currentValue);
    if (value !== null) {
      const tempSport = { ...this.sportList[index], [fieldName]: value };
      this.update(index, tempSport);
    }
  }

  update(index: number, sport: Sport): void {
    this.sportService.editSport(index, sport);
  }
}
