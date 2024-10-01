import { Component } from '@angular/core';
import { TVShow } from '../types';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrl: './tv-show-list.component.css',
})
export class TvShowListComponent {
  showList: TVShow[] = [];

  title: string = '';
  time: string = '';

  add() {
    this.showList.push({
      title: this.title,
      time: this.time,
    });
    this.title = '';
    this.time = '';
  }
}
