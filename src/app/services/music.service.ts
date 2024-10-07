import { Injectable } from '@angular/core';
import { Music } from '../types';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private musicList: Music[] = [
    {
      title: 'Shape of You',
      artist: 'Ed Sheeran',
    },
    {
      title: 'Blinding Lights',
      artist: 'The Weeknd',
    },
  ];

  getMusicList() {
    return this.musicList;
  }

  addMusic(music: Music): void {
    this.musicList.push(music);
  }

  deleteMusic(index: number): void {
    this.musicList.splice(index, 1);
  }

  editMusic(index: number, newMusic: Music) {
    this.musicList[index] = newMusic;
  }
}
