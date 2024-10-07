import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Music } from '../types';

@Component({
  selector: 'app-music',
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.css',
})
export class MusicListComponent implements OnInit {
  musicList: Music[] = [];
  title: string = '';
  artist: string = '';

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.musicList = this.musicService.getMusicList();
  }

  add(): void {
    if (this.title && this.artist) {
      this.musicService.addMusic({
        title: this.title,
        artist: this.artist,
      });

      this.title = '';
      this.artist = '';
    }
  }

  deleteMusic(index: number): void {
    this.musicService.deleteMusic(index);
  }

  editField(index: number, fieldName: keyof Music, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempMusic = { ...this.musicList[index], [fieldName]: value };
      this.update(index, tempMusic);
    }
  }

  update(index: number, music: Music): void {
    this.musicService.editMusic(index, music);
  }
}
