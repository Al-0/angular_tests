import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AccessToken } from '../interfaces/accessToken';
import { ArtistInfo } from '../interfaces/artistInfo';
import { ArtistsRoot } from '../interfaces/artists';
import { NewReleases } from '../interfaces/newReleases';
import { TopTracks } from '../interfaces/topTracks';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: string = '';
  headers: HttpHeaders = new HttpHeaders;

  constructor(private http: HttpClient) {
    this.getToken().subscribe((response: AccessToken) => {
      this.token = response.access_token;
      this.headers = new HttpHeaders({
        Authorization:
          `Bearer ${this.token}`,
      });
    });
  }

  getQuery(url: string){
    return this.http
      .get(`${environment.spotifyURL}${url}`, {
        headers: this.headers,
      })
  }

  getnewReleases() {
    return this.getQuery('browse/new-releases?limit=10')
      .pipe(map((x) => x as NewReleases));
  }

  getArtists(query: string) {
    return this.getQuery(`search?query=${query}&type=artist&market=ES&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=15`)
      .pipe(map((x) => x as ArtistsRoot));
  }

  getArtistInfo(id: string){
    return this.getQuery(`artists/${id}`)
      .pipe(map(x => x as ArtistInfo));
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?market=es`)
      .pipe(map(x => x as TopTracks));
  }

  getToken() {
    const clientId = environment.clientId;
    const clientSecret = environment.clientSecret;
    const authorizationTokenUrl = `https://accounts.spotify.com/api/token`;
    const body = 'grant_type=client_credentials';
    return this.http
      .post(authorizationTokenUrl, body, {
        headers: new HttpHeaders({
          Authorization: 'Basic  ' + btoa(clientId + ':' + clientSecret),
          'Content-Type': 'application/x-www-form-urlencoded;',
        }),
      })
      .pipe(map((tokenResponse) => tokenResponse as AccessToken));
  }
}
