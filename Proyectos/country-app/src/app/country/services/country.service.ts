import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RestCountriesResponse } from '../interfaces/rest-country.interface';
import type { Country } from '../interfaces/country.interface';
import { map, Observable, catchError, throwError, delay, of } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private readonly baseUrl = environment.base_url;
  private readonly headers = {
    Authorization: `Bearer ${environment.api_key}`,
  };

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http
      .get<RestCountriesResponse>(`${this.baseUrl}/capitals?q=${query.trim().toLowerCase()}`, {
        headers: this.headers,
      })
      .pipe(
        map((resp) => {
          const countries = CountryMapper.mapRestCountriesToCountries(resp);
          if (countries.length === 0) {
            throw new Error('No se pudo encontrar países con ese query');
          }
          return countries;
        }),
        catchError((error) => {
          console.log('Error Fetching', error);
          return throwError(() => new Error('No se pudo encontrar países con ese query'));
        })
      );
  }


  searchByCountry(query: string): Observable<Country[]> {
    return this.http.
    get<RestCountriesResponse>(`${this.baseUrl}/names.translations?q=${query.trim().toLocaleLowerCase()}`,
    {headers: this.headers,})
    .pipe(
      map((resp) => {
        const countries = CountryMapper.mapRestCountriesToCountries(resp);
        if (countries.length === 0) {
          throw new Error("No se pudo encontrar países con ese query");
        }
        return countries;
      }),
      delay(200),
      catchError((error) => {
        console.log("Error Fetching", error);
        return throwError(() => new Error("No se pudo encontrar países con ese query"));
      })
    )
  }

  searchCountryByCode(code: string) {
    return this.http.
    get<RestCountriesResponse>(`${this.baseUrl}/code?q=${code.trim().toLocaleLowerCase()}`,
    {headers: this.headers,})
    .pipe(
      map((resp) => {
        const countries = CountryMapper.mapRestCountriesToCountries(resp);
        if (countries.length === 0) {
          throw new Error("No se pudo encontrar países con ese query");
        }
        return countries;
      }),
      map((country) => country.at(0)),
      delay(1500),
      catchError((error) => {
        console.log("Error Fetching", error);
        return throwError(() => new Error("No se pudo encontrar países con ese query"));
      })
    )
  }
}
