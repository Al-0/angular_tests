import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games: Game[] = [];

  constructor(private http: HttpClient) { }

  getNominated() {
    if (this.games.length) return of(this.games);

    return this.http.get<Game[]>(`${environment.url}/api/goty`)
      .pipe(
        tap(
          games => this.games = games
        )
      );
  }
}
