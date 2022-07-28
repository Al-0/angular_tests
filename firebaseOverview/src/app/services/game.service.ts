import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/game.model';
import { Vote } from '../interfaces/vote.model';

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

  castVote(id: string) {
    return this.http.post<Vote>(`${environment.url}/api/goty/${id}`,{})
      .pipe(
        catchError(err => {
          return of(err.error);
        })
      );
  }
}
