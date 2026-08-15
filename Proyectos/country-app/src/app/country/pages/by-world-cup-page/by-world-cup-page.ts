import { Component, inject, linkedSignal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-world-cup-page',
  imports: [CountryList, CountrySearchInput],
  templateUrl: './by-world-cup-page.html',
})
export class ByWorldCupPage {
  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('q') ?? '';
  query = linkedSignal(() => this.queryParam);

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      this.router.navigate(['/country/by-world-cup'], {
        queryParams: { q: params.query },
        queryParamsHandling: 'merge'
      });

      return this.countryService.searchByWorldCup(params.query);
    }
  });
}
