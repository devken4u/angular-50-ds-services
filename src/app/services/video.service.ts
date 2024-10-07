import { Injectable } from '@angular/core';
import { Video } from '../types';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private videoList: Video[] = [
    {
      title: 'Introduction to Angular',
      views: 1500,
    },
    {
      title: 'Learn TypeScript in 30 Minutes',
      views: 800,
    },
  ];

  getVideoList() {
    return this.videoList;
  }

  addVideo(video: Video): void {
    this.videoList.push(video);
  }

  deleteVideo(index: number): void {
    this.videoList.splice(index, 1);
  }

  editVideo(index: number, newVideo: Video) {
    this.videoList[index] = newVideo;
  }
}
