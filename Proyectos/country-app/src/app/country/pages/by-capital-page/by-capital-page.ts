import { Component, inject, resource, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input';
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-by-capital-page',
  imports: [CountryList, CountrySearchInput],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
  private countryService = inject(CountryService);


  query = signal('')

  countryResource = resource({
    params: () => ({query: this.query()}),
    loader: async({params}) => {
      params.query
      if (!params.query) return [];
      return await firstValueFrom(this.countryService.searchByCapital(params.query))
    }
  })

  // isLoading = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);

  // onSearch(query: string) {
  //   if (this.isLoading()) return;
  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   this.countryService.searchByCapital(query).subscribe({
  //     next: (response) => {
  //       this.countries.set(response);
  //       this.isLoading.set(false);
  //     },
  //     error: (error) => {
  //       console.log(error)
  //       this.isError.set(`No se encontró un país con la capital: ${query}`);
  //       this.countries.set([])
  //       this.isLoading.set(false);
  //     }
  //   });
  // }
}
