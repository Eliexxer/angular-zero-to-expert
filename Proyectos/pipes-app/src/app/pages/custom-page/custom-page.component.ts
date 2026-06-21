import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes';
import { CanflyPipe } from '../../pipes/canfly-pipe.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { ColorMap, Hero } from '../../interfaces/hero.interfaces';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortPipe } from '../../pipes/hero-sort.pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page.component',
  imports: [
    ToggleCasePipe,
    CanflyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortPipe,
    HeroFilterPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Eliexer Acosta');
  upperCase = signal(false);
  colorMap = ColorMap;

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');

  // toggleCaseButton() {
  //   console.log(this.upperCase);
  //   this.upperCase.update((value) => !value);
  // }
}
