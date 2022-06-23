import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie-listings';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = []; 

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getListing().subscribe(res => {
      // console.log(res.results);
      this.movies = res.results;
    })
  }
}
