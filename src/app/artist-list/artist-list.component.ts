import { Component } from '@angular/core';
import { Artist } from '../types';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css',
})
export class ArtistListComponent {
  artistList: Artist[] = [];

  name: string = '';

  add() {
    this.artistList.push({
      name: this.name,
    });
    this.name = '';
  }
}
