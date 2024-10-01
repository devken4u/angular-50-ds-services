import { Component } from '@angular/core';
import { Podcast } from '../types';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css',
})
export class PodcastListComponent {
  podcastList: Podcast[] = [];

  title: string = '';
  speaker: string = '';

  add() {
    this.podcastList.push({
      title: this.title,
      speaker: this.speaker,
    });
    this.title = '';
    this.speaker = '';
  }
}
