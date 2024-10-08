import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../services/podcast.service';
import { Podcast } from '../types';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.css'],
})
export class PodcastListComponent implements OnInit {
  podcastList: Podcast[] = [];
  title: string = '';
  speaker: string = '';

  constructor(private podcastService: PodcastService) {}

  ngOnInit(): void {
    this.podcastList = this.podcastService.getPodcastList();
  }

  add(): void {
    if (this.title && this.speaker) {
      this.podcastService.addPodcast({
        title: this.title,
        speaker: this.speaker,
      });
      this.title = '';
      this.speaker = '';
    }
  }

  deletePodcast(index: number): void {
    this.podcastService.deletePodcast(index);
  }

  editField(index: number, fieldName: keyof Podcast, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const updatedPodcast = { ...this.podcastList[index], [fieldName]: value };
      this.update(index, updatedPodcast);
    }
  }

  update(index: number, podcast: Podcast): void {
    this.podcastService.editPodcast(index, podcast);
  }
}
