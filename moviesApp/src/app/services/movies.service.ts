import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, map } from 'rxjs';
import { Movie, MovieListings } from '../interfaces/movie-listings';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseURL = 'https://api.themoviedb.org/3';
  private page = 1;
  public loading = false;

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: 'cb4e9abab17a3141fbf471dc27f939ab',
      language: 'en-US',
      page: this.page.toString()
    }
  }

  getListing() : Observable<Movie[]> {
    if (this.loading) return of([]);

    this.loading = true;

    return this.http.get<MovieListings>(`${this.baseURL}/movie/now_playing`, {
      params: this.params
    }).pipe(
      map( res => res.results),
      tap( () => {
        this.loading = false;
        this.page += 1;
      })
    )
  }
}
