import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styles: `
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }.active {
      color: #341162;
      font-weight: bold;
    }
  `
})
export class NavBar {}
