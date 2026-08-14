import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input';
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-country-page',
  imports: [CountryList, CountrySearchInput],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  countryService = inject(CountryService)

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = linkedSignal(() => this.queryParam)

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);

      this.router.navigate(['/country/by-country'], {
        queryParams: {
          q: params.query,
        }
      });

      return this.countryService.searchByCountry(params.query)
    }
  })
}
