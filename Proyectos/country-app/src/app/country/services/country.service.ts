import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RestCountriesResponse } from '../interfaces/rest-country.interface';
import type { Country } from '../interfaces/country.interface';
import { map, Observable } from 'rxjs';
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
    return this.http
      .get<RestCountriesResponse>(`${this.baseUrl}capitals?q=${query.trim().toLowerCase()}`, {
        headers: this.headers,
      })
      .pipe(map((resp) => CountryMapper.mapRestCountriesToCountries(resp)));
  }
}
