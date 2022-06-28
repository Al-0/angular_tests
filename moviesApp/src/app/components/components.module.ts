import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, MoviesPosterGridComponent],
  imports: [CommonModule, RouterModule, SwiperModule, NgbRatingModule, PipesModule],
  exports: [NavbarComponent, SlideshowComponent, MoviesPosterGridComponent],
})
export class ComponentsModule {}
