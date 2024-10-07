import { Component, OnInit } from '@angular/core';
import { TVShowService } from '../services/tv-show.service';
import { TVShow } from '../types';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show-list.component.html',
  styleUrl: './tv-show-list.component.css',
})
export class TvShowListComponent implements OnInit {
  tvShowList: TVShow[] = [];
  title: string = '';
  time: string = '';

  constructor(private tvShowService: TVShowService) {}

  ngOnInit(): void {
    this.tvShowList = this.tvShowService.getTVShowList();
  }

  add(): void {
    if (this.title && this.time) {
      this.tvShowService.addTVShow({
        title: this.title,
        time: this.time,
      });

      this.title = '';
      this.time = '';
    }
  }

  deleteShow(index: number): void {
    this.tvShowService.deleteTVShow(index);
  }

  editField(index: number, fieldName: keyof TVShow, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempShow = { ...this.tvShowList[index], [fieldName]: value };
      this.update(index, tempShow);
    }
  }

  update(index: number, show: TVShow): void {
    this.tvShowService.editTVShow(index, show);
  }
}
