// movie.service.ts
import { Injectable } from '@angular/core';
import { Movie } from '../types';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movieList: Movie[] = [
    { name: 'Inception', rating: 8.8 },
    { name: 'Interstellar', rating: 8.6 },
    { name: 'The Dark Knight', rating: 9.0 },
  ];

  getMovieList() {
    return this.movieList;
  }

  addMovie(movie: Movie): void {
    this.movieList.push(movie);
  }

  deleteMovie(index: number): void {
    this.movieList.splice(index, 1);
  }

  editMovie(index: number, newMovie: Movie) {
    this.movieList[index] = newMovie;
  }
}
