import { Component } from '@angular/core';
import { Music } from '../types';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.css',
})
export class MusicListComponent {
  musicList: Music[] = [];

  title: string = '';
  artist: string = '';

  add() {
    this.musicList.push({
      title: this.title,
      artist: this.artist,
    });
    this.title = '';
    this.artist = '';
  }
}
