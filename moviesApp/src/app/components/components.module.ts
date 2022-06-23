import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { BarRatingModule } from 'ngx-bar-rating';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';

@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, MoviesPosterGridComponent],
  imports: [CommonModule, RouterModule, SwiperModule, BarRatingModule],
  exports: [NavbarComponent, SlideshowComponent, MoviesPosterGridComponent],
})
export class ComponentsModule {}
