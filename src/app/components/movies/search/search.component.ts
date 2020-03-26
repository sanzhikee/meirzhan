import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '../../shared/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public query: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.query = params['query'];
    });
  }

  searching(): void {
    if (this.query) {
      this.router.navigate([], {
        queryParams: {
          query: this.query
        }
      });
    } else {
      this.router.navigate([], {
        queryParams: {}
      });
    }
  }

}
