import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private youtubeURL = 'https://youtube.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyC31w-fJ0MOM7Xmrc4WFxBCpXoBnr1HeSA';
  private playlistId = 'UUpmu4uEZ8XcPjHdHh7_zFOg';
  private nextPageToken = '';

  constructor(private http: HttpClient) {}

  getVideos() {
    const url = `${this.youtubeURL}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('playlistId', this.playlistId)
      .set('maxResults', 10)
      .set('key', this.apiKey);

    return this.http.get(url, { params });
  }
}
