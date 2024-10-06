import { Injectable } from '@angular/core';
import { Sport } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  private sportList: Sport[] = [
    {
      name: 'Basketball',
    },
  ];

  getSportList() {
    return this.sportList;
  }

  addSport(sport: Sport): void {
    this.sportList.push(sport);
  }

  deleteSport(index: number): void {
    this.sportList.splice(index, 1);
  }

  editSport(index: number, newSport: Sport) {
    this.sportList[index] = newSport;
  }
}
