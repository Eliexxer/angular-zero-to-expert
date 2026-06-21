import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './country-search-input.html',
  styles: ``,
})
export class CountrySearchInput {
  byPage = input.required<string>();

  value = output<string>();
}
