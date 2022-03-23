import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistsRoot } from 'src/app/interfaces/artists';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  $artists: Observable<ArtistsRoot> = new Observable();

  constructor(private spotify: SpotifyService,
              private router: Router
    ) { }

  ngOnInit(): void {
  }

  search(query: string){
    if (query){ 
      this.$artists = this.spotify.getArtists(query);
    }
  }

  seeArtist(id: string){
    this.router.navigate(['/artist', id]);
  }

}
