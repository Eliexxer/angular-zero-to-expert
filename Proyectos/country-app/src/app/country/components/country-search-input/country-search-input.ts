import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './country-search-input.html',
  styles: ``,
})
export class CountrySearchInput {
  byPage = input.required<string>();

  value = output<string>();
  inputValue = signal<string>('');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();
    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, 300);
    onCleanup(() => clearTimeout(timeout));
  })
}
