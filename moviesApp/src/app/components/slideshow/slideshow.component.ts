import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

import { Movie } from 'src/app/interfaces/movie-listings';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[] = [];
  swiper!: Swiper;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      loop: true,
    });
  }

  onPrevSlide(){
    this.swiper.slidePrev();
  }

  onNextSlide(){
    this.swiper.slideNext();
  }

}
