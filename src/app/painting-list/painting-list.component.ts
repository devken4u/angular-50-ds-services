import { Component } from '@angular/core';
import { Painting } from '../types';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css',
})
export class PaintingListComponent {
  paintingList: Painting[] = [];

  title: string = '';
  year: number = 0;

  add() {
    this.paintingList.push({
      title: this.title,
      year: this.year,
    });
    this.title = '';
    this.year = 0;
  }
}
