import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from '../../shared/services/movies.service';
import {Movie} from '../../shared/movie.model';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input movies?: Movie[];
  @Input() searched?: BehaviorSubject<string>;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    if (!this.searched) {
      this.searched = new BehaviorSubject<string>();
    }
    this.searched.subscribe((searched) => {
      this.movies = this.moviesService.getMovies(searched);
    });
  }

}
