import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie-listings';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchText = '';
  public movies: Movie[] = [];

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.searchText = params['text'];
      this.moviesService.searchMovie(params['text']).subscribe(res => {
        this.movies = res;
      });
    })
  }

}
