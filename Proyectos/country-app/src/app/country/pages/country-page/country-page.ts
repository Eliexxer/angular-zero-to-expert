import { Component, inject, input, signal } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { NotFound } from '../../../shared/components/not-found/not-found';
import { InformationPage } from './information-page/information-page';

@Component({
  selector: 'app-country-page',
  imports: [NotFound, InformationPage],
  templateUrl: './country-page.html',
  styles: ``,
})
export class CountryPage {
  countryService = inject(CountryService);
  code = input.required<string>();
  // countryCode = inject(ActivatedRoute).snapshot.params['code'];

  countryResource = rxResource({
    params: () => ({ query: this.code() }),
    stream: ({ params }) => {
      return this.countryService.searchCountryByCode(params.query);
    },
  });
}
