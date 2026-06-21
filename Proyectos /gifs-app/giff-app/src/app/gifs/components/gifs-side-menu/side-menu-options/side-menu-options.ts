import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from '../../../services/gifs.service';


interface MenuOptions {
  icon: string;
  label: string;
  sublabel: string;
  router: string;
}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {
  public gifService = inject(GifService);
  menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifs en tendencia',
      router: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscar',
      sublabel: 'Buscar gifs',
      router: '/dashboard/search',
    },
    {
      icon: 'fa-solid fa-star',
      label: 'Favoritos',
      sublabel: 'Gifs favoritos',
      router: '/dashboard/favorites',
    },
  ];
}
