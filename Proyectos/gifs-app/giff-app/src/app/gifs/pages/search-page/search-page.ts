import { Component, inject, input, signal } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { Gifs } from '../../interfaces/gif.interface';
import { GifMapper } from '../../mappers/gifs.mapper';

@Component({
  selector: 'app-search-page',
  imports: [GifsListComponent],
  templateUrl: './search-page.html',
})
export default class SearchPage {
  gifService = inject(GifService);
  gifs = signal<Gifs[]>([]);
  onSearch(query: string) {
    console.log('Buscando Gifs');
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
    });
  }
}
