import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/countries.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http
      .get('https://restcountries.com/v3.1/lang/spa')
      .pipe(map((x) => x as Country[]))
      .pipe(
        map((res): any[] =>
          res.map((country) => ({
            name: country.name.common,
            code: country.cca3,
          }))
        )
      );
  }
}
