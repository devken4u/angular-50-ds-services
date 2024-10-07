import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';
import { Video } from '../types';

@Component({
  selector: 'app-video',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css',
})
export class VideoListComponent implements OnInit {
  videoList: Video[] = [];
  title: string = '';
  views: number | null = null;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoList = this.videoService.getVideoList();
  }

  add(): void {
    if (this.title && this.views !== null) {
      this.videoService.addVideo({
        title: this.title,
        views: this.views,
      });

      this.title = '';
      this.views = null;
    }
  }

  deleteVideo(index: number): void {
    this.videoService.deleteVideo(index);
  }

  editField(index: number, fieldName: keyof Video, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempVideo = { ...this.videoList[index], [fieldName]: value };
      this.update(index, tempVideo);
    }
  }

  update(index: number, video: Video): void {
    this.videoService.editVideo(index, video);
  }
}
