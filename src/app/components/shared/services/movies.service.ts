import {Injectable} from '@angular/core';
import {movies} from '../movie.mock-data';
import {GenreType, Movie} from '../movie.model';

@Injectable({providedIn: 'root'})

export class MoviesService {
  constructor() {
  }

  getMovies(search?: string, genres?: GenreType[], except?: number): Movie[] {
    return movies.filter((movie: Movie) => {
      if(except) {
        if (movie.id == except) {
          return false;
        }
      }
      if (search) {
        if (movie.name.toLowerCase().includes(search.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      } else if (genres) {
        for (const genre of genres) {
          return movie.genres.includes(genre);
        }
        return false;
      } else {
        return true;
      }
    });
  }

  getMovie(id): Movie[] {
    return movies.filter((movie: Movie) => {
      if (movie.id == id) {
        return movie;
      }
    });
  }
}
