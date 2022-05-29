import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map, delay } from 'rxjs';

interface PostRes {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url = 'https://login-firebase-ab56b-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get(`${this.url}/heroes.json`).pipe(
      map((res) => {
        return this.createHeroesArray(res);
      }), delay(1500)
    );
  }

  private createHeroesArray(heroesObj: Object) {
    if (heroesObj === null) {
      return [];
    }

    const heroes: HeroeModel[] = [];

    Object.keys(heroesObj).forEach((key) => {
      const heroe: HeroeModel = (heroesObj as any)[key];
      heroe.id = key;
      heroes.push(heroe);
    });

    return heroes;
  }

  getHeroe(id: string) {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  createHeroe(heroe: HeroeModel) {
    return this.http
      .post(`${this.url}/heroes.json`, heroe)
      .pipe(map((x) => x as PostRes))
      .pipe(
        map((res) => {
          heroe.id = res.name;
          return heroe;
        })
      );
  }

  updateHeroe(heroe: HeroeModel, id: string) {
    return this.http.put(`${this.url}/heroes/${id}.json`, heroe);
  }

  deleteHeroe(id: string) {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }
  
}
