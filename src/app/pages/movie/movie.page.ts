import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie.service';
import { Movies } from '../../model/Movies.interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  results: Observable<Movies>;
  term: string = '';
  type: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  searchChanged(e): void {
    this.results = this.movieService.searchMovies(this.term, this.type);
  }
}
