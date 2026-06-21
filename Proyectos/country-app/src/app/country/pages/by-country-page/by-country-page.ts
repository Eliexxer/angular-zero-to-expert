import { Component } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input';

@Component({
  selector: 'app-by-country-page',
  imports: [CountryList, CountrySearchInput],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {}
