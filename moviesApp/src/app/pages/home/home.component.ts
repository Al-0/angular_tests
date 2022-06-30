import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie-listings';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public movies: Movie[] = []; 
  public moviesSlideshow: Movie[] = []; 

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max && !this.moviesService.loading){
      this.moviesService.getListing().subscribe(res =>{
        this.movies.push(...res)
        // console.log(this.movies)
      })
    }
  }
   
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getListing().subscribe(res => {
      // console.log(res.results);
      this.movies = res;
      this.moviesSlideshow = res;
    })
  }

  ngOnDestroy(): void {
    this.moviesService.resetPage();
  }
}
