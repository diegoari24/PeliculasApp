import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Movies } from '../model/Movies.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url: string = '';
  private apiKey: string = 'f2fc2dea';
  constructor(private http: HttpClient) { 
  }
    searchMovies(title: string, type: string) {
      this.url = `https://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
      return this.http.get<Movies>(this.url).pipe(map(results => results['Search']));
    }
  
    getDetails(id: string) {
      return this.http.get<Movies>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
    }
  }

