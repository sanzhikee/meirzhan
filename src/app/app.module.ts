import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MoviesComponent} from './components/movies/movies.component';
import { SearchComponent } from './components/movies/search/search.component';
import { ListComponent } from './components/movies/list/list.component';
import { ListItemComponent } from './components/movies/list-item/list-item.component';
import { FiltersComponent } from './components/movies/filters/filters.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SearchComponent,
    ListComponent,
    ListItemComponent,
    FiltersComponent,
    MovieViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
