import { DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import { LngLat, LngLatLike, Map, MapMouseEvent, Marker } from 'maplibre-gl';
import { UUIDTypes, v4 as UUIDv4 } from 'uuid';

interface libreMarker {
  id: string;
  markerCoordinates: {lng: number, lat: number},
  maplibreMarker: Marker
}

@Component({
  selector: 'app-markers-page',
  imports: [DecimalPipe],
  templateUrl: './markers-page.html',
})
export class MarkersPage implements AfterViewInit{

  divElement = viewChild<ElementRef>('map');
  map = signal<Map | null>(null);
  markers = signal<libreMarker[]>([]);

  ngAfterViewInit() {
    const element = this.divElement()?.nativeElement;
    if (!element) throw new Error('Div element not found');
    const { lat, lng } = { lat: 7.4238, lng: -66.5897 };

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
      zoom: 11,
    });

    // const marker = new Marker({
    //   draggable: true,
    //   color: 'black'
    // })
    //   .setLngLat([lng, lat])
    //   .addTo(map)

    this.map.set(map);
    this.mapListeners(map);
    // this.markerListeners(marker);

  }

  mapListeners(map: Map) {
    map.on('load', () => console.log('Map loaded'));
    map.on('click', (event) => this.mapClick(event, map));
  }

  mapClick(event: MapMouseEvent, map: Map) {
    console.log('Map clicked at:', event.lngLat);
    const Color = 'xxxxxx'.replace(/x/g, (y) => (Math.random() * 16 | 0).toString(16));
    const marker = new Marker({
      draggable: true,
      color: `#${Color}`
    })
      .setLngLat(event.lngLat)
      .addTo(map)
    marker.on('dragend', () => {
      const lngLat = marker.getLngLat();
      console.log('Marker dragged to:', lngLat);
    });
    const newMarker: libreMarker = {
      id: UUIDv4(),
      markerCoordinates: marker.getLngLat(),
      maplibreMarker: marker,
    }
    this.markers.update((markers) => [newMarker, ...markers]);
  }

  flyToMarkers(LngLat: LngLatLike) {
    this.map()?.flyTo({
      center: LngLat
    })
  }

  deleteMarker(marker: libreMarker) {
    if (!this.map()) return
    const map = this.map()!;

    this.markers.set(this.markers().filter(m => m.id !== marker.id))
  }

  // markerListeners(marker: Marker) {
  //   marker.on('dragend', () => {
  //     const lngLat = marker.getLngLat();
  //     console.log('Marker dragged to:', lngLat);
  //   });
  // }
}
