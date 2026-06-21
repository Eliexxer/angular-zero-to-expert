import { Component, computed, effect, inject, signal } from '@angular/core';
import { routes } from '../../app.routes';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Locales, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page.component',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  localeService = inject(LocaleService);

  route = routes.map((route) => ({
    path: route.path ?? '',
    title: route.title ?? '',
  }));

  nameLower = signal('eliexer');
  nameUpper = signal('ELIEXER');
  fullName = signal('ElieXer ACosTa');

  customDate = signal(new Date());

  currentLocale = signal(this.localeService.getLocale);

  changeLocale(locale: Locales) {
    console.log({ locale });
    this.localeService.changeLocale(locale);
  }

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  });
}
