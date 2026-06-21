import { Routes } from '@angular/router';
import { HeroPage } from './pages/hero-page/hero-page';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { Dragonball } from './pages/dragonball/dragonball';

export const routes: Routes = [
  {
    path: 'hero',
    component: HeroPage
  },
  {path: '', component: CounterPageComponent},
  {path: 'dragonball', component: Dragonball}
];
