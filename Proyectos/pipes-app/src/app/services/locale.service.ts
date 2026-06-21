import { Injectable, signal } from '@angular/core';

export type Locales = 'es' | 'es-VE' | 'en' | 'fr';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private currentLocale = signal<Locales>('es-VE');

  constructor() {
    this.currentLocale.set((localStorage.getItem('locale') as Locales) ?? 'es-VE');
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: Locales) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
