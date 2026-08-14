import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

interface Filtro {
  id: string;
  region: string;
  isPressed: boolean;
}

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  countryService = inject(CountryService);

  activeId = signal<string>('');
  activatedRoute = inject(ActivatedRoute)
  route = inject(Router);

  queryParams = this.activatedRoute.snapshot.queryParamMap.get('region') ?? ''
  selectedRegion = linkedSignal<string>(() => this.queryParams ?? 'Americas');

  opciones: Filtro[] = [
    { id: 'africa', region: 'Africa', isPressed: false },
    { id: 'americas', region: 'Americas', isPressed: false },
    { id: 'asia', region: 'Asia', isPressed: false },
    { id: 'europe', region: 'Europe', isPressed: false },
    { id: 'oceania', region: 'Oceania', isPressed: false },
  ]

  onRegionSelected(opcion: Filtro) {
      // Si ya está activo, no vuelve a ejecutar
      if (this.activeId() === opcion.id) return;
      this.activeId.set(opcion.id);
    }

  countryResource = rxResource({
    params: () => {
      const region = this.opciones.find((o) => o.id === this.activeId())?.region;
      return { region: region ?? '' };
    },
    stream: ({ params }) => {
      if (!params.region) return of([]);
      this.route.navigate(['country/by-region'], {
        queryParams: {
          q: params.region
        }
      })
      return this.countryService.searchCountryByRegion(params.region);
    }
  })
}
