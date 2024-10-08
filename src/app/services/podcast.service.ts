import { Injectable } from '@angular/core';
import { Podcast } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  private podcastList: Podcast[] = [
    {
      title: 'Tech Talk',
      speaker: 'John Doe',
    },
    {
      title: 'History Deep Dive',
      speaker: 'Jane Smith',
    },
  ];

  getPodcastList(): Podcast[] {
    return this.podcastList;
  }

  addPodcast(podcast: Podcast): void {
    this.podcastList.push(podcast);
  }

  deletePodcast(index: number): void {
    this.podcastList.splice(index, 1);
  }

  editPodcast(index: number, newPodcast: Podcast): void {
    this.podcastList[index] = newPodcast;
  }
}
