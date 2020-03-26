import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieViewComponent} from './components/movie-view/movie-view.component';


const routes: Routes = [
  {
    path: '', component: MoviesComponent
  },
  {
    path: 'movie/:id', component: MovieViewComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
