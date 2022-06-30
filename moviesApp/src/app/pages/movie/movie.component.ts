import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movie!: MovieDetails;

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService, private location: Location) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    this.moviesService.getMovieDetails(id).subscribe(res =>{
      this.movie = res;
    })

  }

  onGoBack(){
    this.location.back();
  }

}
