import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canfly',
})
export class CanflyPipe implements PipeTransform {
  transform(canfly: boolean): string {
    if (canfly) {
      return 'Puede volar';
    }
    return 'No puede volar';
  }
}
