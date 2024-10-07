import { Injectable } from '@angular/core';
import { Painting } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PaintingService {
  private paintingList: Painting[] = [
    {
      title: 'Starry Night',
      year: 1889,
    },
    {
      title: 'Mona Lisa',
      year: 1503,
    },
  ];

  getPaintingList() {
    return this.paintingList;
  }

  addPainting(painting: Painting): void {
    this.paintingList.push(painting);
  }

  deletePainting(index: number): void {
    this.paintingList.splice(index, 1);
  }

  editPainting(index: number, newPainting: Painting) {
    this.paintingList[index] = newPainting;
  }
}
