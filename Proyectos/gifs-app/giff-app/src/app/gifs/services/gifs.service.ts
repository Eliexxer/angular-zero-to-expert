import { HttpClient } from '@angular/common/http';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gifs } from '../interfaces/gif.interface';
import { GifMapper } from '../mappers/gifs.mapper';
import { map, tap } from 'rxjs';

const loadFromLocalStorage = (): Record<string, Gifs[]> => {
  const searchHistory = localStorage.getItem('searchHistory');
  return searchHistory ? JSON.parse(searchHistory) : {};
};

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gifs[]>([]);
  trendinGifsLoading = signal(false);
  private trendingPage = signal(0);

  trendingGifGroup = computed<Gifs[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    console.log(groups);
    return groups;
  });

  searchHistory = signal<Record<string, Gifs[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  saveToLocalStorage = effect(() => {
    console.log('tamaño del historial', this.searchHistoryKeys().length);
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory()));
  });

  constructor() {
    this.loadTrendingGifs();
    console.log('Servicio Creado');
  }

  loadTrendingGifs() {
    if (this.trendinGifsLoading()) return;

    this.trendinGifsLoading.set(true);

    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: { api_key: environment.apiKey, limit: 20, offset: this.trendingPage() * 20 },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.update((currentGifs) => [...currentGifs, ...gifs]);
        this.trendinGifsLoading.set(false);
        this.trendingPage.update((currentValue) => currentValue + 1);
        console.log({ gifs });
      });
  }

  searchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: { api_key: environment.gifsApi, limit: 20, q: query },
      })
      .pipe(
        map(({ data }) => data),
        map((giphyItems) => GifMapper.mapGiphyItemsToGifArray(giphyItems)),

        tap((giphyItems) => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLowerCase()]: giphyItems,
          }));
        }),
      );
    // .subscribe((resp) => {
    //   const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
    //   this.searchingGifs.set(gifs);
    //   this.searchingGifsLoading.set(false);
    //   console.log({ search: gifs });
    // });
  }

  getHistoryGifs(query: string) {
    return this.searchHistory()[query] ?? [];
  }
}
