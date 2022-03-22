import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AccessToken } from '../interfaces/acessToken';
import { NewReleases } from '../interfaces/newReleases';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: string = '';

  constructor(private http: HttpClient) {
    this.getToken().subscribe((response: AccessToken) => {
      this.token = response.access_token;
    });
  }

  getnewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        `Bearer ${this.token}`,
    });

    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases?limit=10', {
        headers,
      })
      .pipe(map((x) => x as NewReleases));
  }

  getArtist(query: string) {}

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
