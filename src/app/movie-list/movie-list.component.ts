import { Component } from '@angular/core';
import { Movie } from '../types';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  movieList: Movie[] = [];

  name: string = '';
  rating: number = 0;

  add() {
    this.movieList.push({
      name: this.name,
      rating: this.rating,
    });
    this.name = '';
    this.rating = 0;
  }
}
