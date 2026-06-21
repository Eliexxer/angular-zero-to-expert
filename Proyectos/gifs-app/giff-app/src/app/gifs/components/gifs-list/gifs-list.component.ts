import { Component, input } from '@angular/core';
import { GifsListItemComponent } from './gifs-list-items/gifs-list-item.component';
import TrendingPage from '../../pages/trending-page/trending-page';
import { Gifs } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  standalone: true,
  imports: [GifsListItemComponent],
})
export class GifsListComponent {
  gifs = input.required<Gifs[]>();
}
