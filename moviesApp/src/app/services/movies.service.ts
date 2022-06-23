import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListings } from '../interfaces/movie-listings';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getListing() : Observable<MovieListings> {
    return this.http.get<MovieListings>('https://api.themoviedb.org/3/movie/now_playing?api_key=cb4e9abab17a3141fbf471dc27f939ab&language=en-US&page=1')
  }
}
