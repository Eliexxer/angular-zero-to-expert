import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenu } from "./gifs/components/gifs-side-menu/gifs-side-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GifsSideMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('giff-app');
}
