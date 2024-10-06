// movie.component.ts
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../types';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  name: string = '';
  rating: number | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieList = this.movieService.getMovieList();
  }

  add(): void {
    if (this.name && this.rating !== null) {
      this.movieService.addMovie({ name: this.name, rating: this.rating });
      this.name = '';
      this.rating = null;
    }
  }

  deleteMovie(index: number): void {
    this.movieService.deleteMovie(index);
  }

  editField(index: number, fieldName: string, currentValue: any) {
    const value = prompt(fieldName, currentValue);
    if (value !== null) {
      const tempMovie = {
        ...this.movieList[index],
        [fieldName]: fieldName === 'rating' ? Number(value) : value,
      };
      this.update(index, tempMovie);
    }
  }

  update(index: number, movie: Movie): void {
    this.movieService.editMovie(index, movie);
  }
}
