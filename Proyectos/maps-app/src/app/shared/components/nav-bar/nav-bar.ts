import { Component, inject } from '@angular/core';
import { routes } from '../../../app.routes';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'nav-bar',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './nav-bar.html',
})
export class NavBar {

  router = inject(Router)

  routes = routes.map((routes) => ({
    path: routes.path,
    title: `${routes.title ?? 'Mapas en Angular'}`,
    })).filter(route => route.path !== '**');

  pageTitle$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    // tap(event => console.log(event)),
    map(event => event.url),
    map((url) => routes.find((route) => `/${route.path}` === url)?.title ?? 'Mapas en Angular')
  )
}
