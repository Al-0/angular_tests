import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewReleases } from 'src/app/interfaces/newReleases';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  $newSongs: Observable<NewReleases>;
    
  constructor( private spotify: SpotifyService) { 
    this.$newSongs = this.spotify.getnewReleases();
  }

  ngOnInit(): void {
  }

}
