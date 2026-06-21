import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '../../components/top-menu.component/top-menu.component';

@Component({
  selector: 'app-country-layout-page',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './country-layout-page.html',
})
export class CountryLayoutPage {}
