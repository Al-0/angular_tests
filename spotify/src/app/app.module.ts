import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

// Routes
import { routes } from './app.routes';

// Services
import { SpotifyService } from './services/spotify.service';

// Pipes
import { NoImagePipe } from './pipes/no-image.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';
import { ErrorComponent } from './components/shared/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistComponent,
    NavbarComponent,
    SearchComponent,
    NoImagePipe,
    LoadingComponent,
    SecureDomPipe,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true } )
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
