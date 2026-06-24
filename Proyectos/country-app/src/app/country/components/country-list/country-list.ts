import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.html',
  styles: ``,
})
export class CountryList {

  isLoading = input<boolean>(false);
  errorMessage = input<Error | null | undefined>(null);
  hasCountries = input<boolean>(false);

  countries = input.required<Country[]>();
}
