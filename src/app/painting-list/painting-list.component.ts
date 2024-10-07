import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../services/painting.service';
import { Painting } from '../types';

@Component({
  selector: 'app-painting',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css',
})
export class PaintingListComponent implements OnInit {
  paintingList: Painting[] = [];
  title: string = '';
  year: number | null = null;

  constructor(private paintingService: PaintingService) {}

  ngOnInit(): void {
    this.paintingList = this.paintingService.getPaintingList();
  }

  add(): void {
    if (this.title && this.year) {
      this.paintingService.addPainting({
        title: this.title,
        year: this.year,
      });

      this.title = '';
      this.year = null;
    }
  }

  deletePainting(index: number): void {
    this.paintingService.deletePainting(index);
  }

  editField(
    index: number,
    fieldName: keyof Painting,
    currentValue: string | number
  ) {
    const value = prompt(`Edit ${fieldName}`, currentValue.toString());
    if (value !== null) {
      const tempPainting = {
        ...this.paintingList[index],
        [fieldName]: fieldName === 'year' ? Number(value) : value,
      };
      this.update(index, tempPainting);
    }
  }

  update(index: number, painting: Painting): void {
    this.paintingService.editPainting(index, painting);
  }
}
