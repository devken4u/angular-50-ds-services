import { Component } from '@angular/core';
import { Video } from '../types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css',
})
export class VideoListComponent {
  videoList: Video[] = [];

  title: string = '';
  views: number = 0;

  add() {
    this.videoList.push({
      title: this.title,
      views: this.views,
    });
    this.title = '';
    this.views = 0;
  }
}
