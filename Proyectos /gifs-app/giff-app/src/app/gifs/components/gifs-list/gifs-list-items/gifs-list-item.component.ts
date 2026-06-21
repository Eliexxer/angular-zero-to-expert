import { Component, input } from '@angular/core';
import { Gifs } from '../../../interfaces/gif.interface';

@Component({
  selector: 'gifs-list-item',
  templateUrl: './gifs-list-item.component.html',
  standalone: true,
})
export class GifsListItemComponent {
  imageUrl = input.required<string>();
}
