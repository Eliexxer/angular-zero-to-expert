import { AfterViewInit, Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { Map, Marker } from 'maplibre-gl';

@Component({
  selector: 'mini-maps',
  imports: [],
  templateUrl: './mini-maps.html',
})
export class MiniMaps implements AfterViewInit{

  divElement = viewChild<ElementRef>('map');
  map = signal<Map | null>(null);

  coordinates = input({
    lng: 0,
    lat: 0
  });

  async ngAfterViewInit() {
    const element = this.divElement()?.nativeElement;
    if (!element) throw new Error('Div element not found');
    const {lat, lng} = this.coordinates();

    const map = new Map({
      container: element,
      interactive: false,
      style: {
        version: 8,
        pitch: 30,
        sources: {
          'osm': {
            type: 'raster',
            tiles: [
              'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            ],
            tileSize: 256,
          }
        },
        layers: [
          {
            id: 'osm-layer',
            type: 'raster',
            source: 'osm',
            minzoom: 0,
            maxzoom: 19
          }
        ]
      },
      center: [lng, lat],
      zoom: 15,
    });

    const color = 'xxxxxx'.replace(/x/g, (y) => (Math.random() * 16 | 0).toString(16));

    const marker = new Marker({
      draggable: false,
      color: `#${color}`,
    })
      .setLngLat([lng, lat])
      .addTo(map)

    this.map.set(map);
    this.mapListeners(map);

  }

  mapListeners(map: Map) {
    map.on('load', () => console.log('Map loaded'));
    map.on('error', (e) => console.error('MapLibre error:', e));
  }



}
