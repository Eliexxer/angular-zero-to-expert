import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './country-search-input.html',
  styles: ``,
})
export class CountrySearchInput {
  byPage = input.required<string>();
  initialValue = input<string>();

  value = output<string>();
  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();
    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, 300);
    onCleanup(() => clearTimeout(timeout));
  })
}
