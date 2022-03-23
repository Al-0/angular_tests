import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { NewReleases } from 'src/app/interfaces/newReleases';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  $newSongs: Observable<NewReleases>;
  errorObject: Error = new Error;
  errorFlag: boolean = false
    
  constructor( private spotify: SpotifyService,
               private router: Router
    ) { 
    this.$newSongs = this.spotify.getnewReleases().pipe(
      catchError(err =>{
        this.errorFlag = true;
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  ngOnInit(): void {
  }

  seeArtist(id: string){
    this.router.navigate(['/artist', id]);
  }

}
