import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { CountryLayoutPage } from './layouts/country-layout-page/country-layout-page';
import { ByCountryPage } from './pages/by-country-page/by-country-page';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { CountryPage } from './pages/country-page/country-page';
import { ByWorldCupPage } from './pages/by-world-cup-page/by-world-cup-page';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutPage,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage,
      },
      {
        path: 'by-country',
        component: ByCountryPage,
      },
      {
        path: 'by-region',
        component: ByRegionPage,
      },
      {
        path: 'by-world-cup',
        component: ByWorldCupPage,
      },
      {
        path: 'by/:code',
        component: CountryPage,
      },

      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },

  //{
  //  path: 'country',
  //},
];

export default countryRoutes;
