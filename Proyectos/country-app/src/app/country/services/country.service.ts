import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RestCountriesResponse } from '../interfaces/rest-country.interface';
import type { Country } from '../interfaces/country.interface';
import { map, Observable, catchError, throwError, delay, of, tap } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheRegion = new Map<string, Country[]>();

  private readonly baseUrl = environment.base_url;
  private readonly headers = {
    Authorization: `Bearer ${environment.api_key}`,
  };

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query) ?? []);
    }

    console.log(`Valor emitido: ${query}`)

    return this.http
      .get<RestCountriesResponse>(`${this.baseUrl}/capitals?q=${query.trim().toLowerCase()}`, {
        headers: this.headers,
      })
      .pipe(
        map((resp) => CountryMapper.mapRestCountriesToCountries(resp)),
        tap((countries) => this.queryCacheCapital.set(query, countries)),
        catchError((error) => {
          console.log('Error Fetching', error);
          return throwError(() => new Error('No se pudo encontrar países con ese query'));
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {

    query = query.toLowerCase()

    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query) ?? []);
    }

    console.log(`Valor emitido: ${query}`)

    return this.http.
    get<RestCountriesResponse>(`${this.baseUrl}/names.translations?q=${query.trim().toLocaleLowerCase()}`,
    {headers: this.headers,})
    .pipe(
      map((resp) => CountryMapper.mapRestCountriesToCountries(resp)),
      tap((countries => this.queryCacheCountry.set(query, countries))),
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

  searchCountryByRegion(query: string): Observable<Country[]> {

    query = query.toLowerCase()

    if (this.queryCacheRegion.has(query)) {
      return of(this.queryCacheRegion.get(query) ?? []);
    }

    console.log(`Valor emitido: ${query}`)

    return this.http.
    get<RestCountriesResponse>(`${this.baseUrl}/region?q=${query.trim().toLocaleLowerCase()}`,
    {headers: this.headers,})
    .pipe(
      map((resp) => CountryMapper.mapRestCountriesToCountries(resp)),
      tap((countries) => this.queryCacheRegion.set(query, countries)),
      catchError((error) => {
        console.log("Error Fetching", error);
        return throwError(() => new Error("No se pudo encontrar países con ese query"));
      })
    )
  }
}
