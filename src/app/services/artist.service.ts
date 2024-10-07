import { Injectable } from '@angular/core';
import { Artist } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private artistList: Artist[] = [
    {
      name: 'Vincent van Gogh',
    },
    {
      name: 'Pablo Picasso',
    },
  ];

  getArtistList() {
    return this.artistList;
  }

  addArtist(artist: Artist): void {
    this.artistList.push(artist);
  }

  deleteArtist(index: number): void {
    this.artistList.splice(index, 1);
  }

  editArtist(index: number, newArtist: Artist) {
    this.artistList[index] = newArtist;
  }
}
