import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { Artist } from '../types';

@Component({
  selector: 'app-artist',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css',
})
export class ArtistListComponent implements OnInit {
  artistList: Artist[] = [];
  name: string = '';

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.artistList = this.artistService.getArtistList();
  }

  add(): void {
    if (this.name) {
      this.artistService.addArtist({
        name: this.name,
      });

      this.name = '';
    }
  }

  deleteArtist(index: number): void {
    this.artistService.deleteArtist(index);
  }

  editField(index: number, fieldName: keyof Artist, currentValue: string) {
    const value = prompt(`Edit ${fieldName}`, currentValue);
    if (value !== null) {
      const tempArtist = { ...this.artistList[index], [fieldName]: value };
      this.update(index, tempArtist);
    }
  }

  update(index: number, artist: Artist): void {
    this.artistService.editArtist(index, artist);
  }
}
