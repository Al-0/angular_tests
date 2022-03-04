import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routes
import { app_routing } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FilteredHeroesComponent } from './components/filtered-heroes/filtered-heroes.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

// Services
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    FilteredHeroesComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }