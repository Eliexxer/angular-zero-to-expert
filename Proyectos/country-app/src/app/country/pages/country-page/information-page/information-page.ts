import { Component, computed, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'information-page',
  imports: [DecimalPipe,TitleCasePipe],
  templateUrl: './information-page.html',
  styles: ``,
})
export class InformationPage {
  country = input.required<Country>();

  languages = computed(() =>
    (this.country().languages ?? []).map((lang) => lang.name).join(', ')
  );

  callingCodes = computed(() => (this.country().callingCodes ?? []).join(' / '));

  timezone = computed(() => this.country().timezones?.[0] ?? '');

  currencies = computed(() =>
    (this.country().currencies ?? [])
      .map(
        (currency) =>
          `${currency.name} (${currency.code}) ${currency.symbol}`
      )
      .join(', ')
  );

  memberships = computed(() => {
    const map = new Map<string, string>([
      ['un', '🇺🇳 ONU'],
      ['eu', '🇪🇺 UE'],
      ['eurozone', '💶 Eurozona'],
      ['schengen', '🛂 Schengen'],
      ['nato', '🛡️ OTAN'],
      ['g7', '🎯 G7'],
      ['g20', '🌐 G20'],
      ['commonwealth', '👑 Mancomunidad'],
      ['oecd', '📈 OCDE'],
      ['brics', '🧱 BRICS'],
      ['opec', '🛢️ OPEP'],
      ['african_union', '🤝 Unión Africana'],
      ['asean', '🏛️ ASEAN'],
      ['arab_league', '🕌 Liga Árabe'],
    ]);
    return Array.from(Object.entries(this.country().memberships ?? {}))
      .filter(([, value]) => value)
      .map(([key]) => map.get(key) ?? key);
  });
}
