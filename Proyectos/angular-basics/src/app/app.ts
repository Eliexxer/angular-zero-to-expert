import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroPage } from './pages/hero-page/hero-page';
import { Navbar } from "./components/shared/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hero-page-component');
}
