import {Component, OnInit} from '@angular/core';
import {Movie} from '../shared/movie.model';
import {MoviesService} from '../shared/services/movies.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {
  public movie$: Observable<Movie>;
  public moviesList: Observable<Movie>;

  constructor(private moviesSevice: MoviesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.movie$ = this.route.params.pipe(
      switchMap((params: Params) => {
        const movie = this.moviesSevice.getMovie(params['id']);
        this.moviesList = this.moviesSevice.getMovies(null, movie[0].genres, movie[0].id);
        return movie;
      })
    );
  }

  back(): void {
    this.router.navigate(['']);
  }
}
