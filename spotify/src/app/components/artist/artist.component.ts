import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArtistInfo } from 'src/app/interfaces/artistInfo';
import { TopTracks } from 'src/app/interfaces/topTracks';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  $artistInfo: Observable<ArtistInfo> = new Observable(); 
  $artistTopTracks: Observable<TopTracks> = new Observable();

  constructor(private activatedRoute: ActivatedRoute,
              private spotify: SpotifyService
    ) { 
    this.activatedRoute.params.subscribe((params) =>{
      this.getArtist(params['id'])
    })
  }

  ngOnInit(): void {
  }

  getArtist(id: string){
    this.$artistInfo = this.spotify.getArtistInfo(id);
    this.$artistTopTracks = this.spotify.getTopTracks(id);
  }

}
