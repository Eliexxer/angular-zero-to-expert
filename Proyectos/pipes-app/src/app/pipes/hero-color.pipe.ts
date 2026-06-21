import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interfaces';

export interface InfoColor {
  hex: string;
  name: string;
}

@Pipe({
  name: 'heroColor',
})
export class HeroColorPipe implements PipeTransform {
  colorMap = ColorMap;
  transform(value: Color): string {
    return Color[value];
  }
}
