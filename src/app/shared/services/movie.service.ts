import { Injectable } from '@angular/core';
import { moviesList } from '../examples';

import { Movies } from '../models/movie.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class MovieService {

  constructor() { this.movies = moviesList }

  private movies: any[];
  private moviesList: any[] = [];

  

  getMovies(){
    this.movies.forEach((value) => {
      this.moviesList.push(new Movies(value.id, value.name, value.director, value.imageUrl,
                                      value.duration, value.releaseData, value.genres))
    })
    return new Observable((movie: Observer<any>) => {
      movie.next(this.moviesList);
    })
  }

  
}