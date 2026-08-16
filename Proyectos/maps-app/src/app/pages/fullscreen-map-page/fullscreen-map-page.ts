import { DecimalPipe, JsonPipe } from '@angular/common';
import { AfterViewInit, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import { Map, NavigationControl, setWorkerUrl } from 'maplibre-gl';

setWorkerUrl('/maplibre-gl-worker.mjs');

@Component({
  selector: 'app-fullscreen-map-page',
  imports: [DecimalPipe, JsonPipe],
  templateUrl: './fullscreen-map-page.html',
  styles: `
    #map {
      width: 100%;
      height: calc(100vh - 56px);
    }

    #controls {
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      box-shadow: 0 0 10px x rgba(0, 0, 0, 0.1);
      border: 1px solid #e2e8f0;
      width: 250px;
    }
  `,
})
export class FullscreenMapPage implements AfterViewInit {

  divElement = viewChild<ElementRef>('map');
  map = signal<Map | null>(null);

  zoom = signal(5.5);
  coordinates = signal({
    lng: -66.5897,
    lat: 7.4238
  });

  zoomEffect = effect(() => {
    if (!this.map()) return;
    this.map()?.zoomTo(this.zoom());
  })

  async ngAfterViewInit() {
    const element = this.divElement()?.nativeElement;
    if (!element) throw new Error('Div element not found');
    const {lat, lng} = this.coordinates();

    const map = new Map({
      container: element,
      style: {
        version: 8,
        sources: {
          'osm': {
            type: 'raster',
            tiles: [
              'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            ],
            tileSize: 256,
            attribution: '&copy; OpenStreetMap contributors'
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
      zoom: this.zoom(),
    });

    this.mapListeners(map);

  }

  mapListeners(map: Map) {
    map.on('load', () => console.log('Map loaded'));
    map.on('error', (e) => console.error('MapLibre error:', e));

    map.on('zoomend', (event) => {
      const newZoom = event.target.getZoom();
      this.zoom.set(newZoom);
    });

    map.on('moveend', () => {
      const center = map.getCenter();
      this.coordinates.set(center)
    });

    map.addControl(new NavigationControl(), 'top-right');


    this.map.set(map)
  }
}
