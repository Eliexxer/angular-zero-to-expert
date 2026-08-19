import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontNavbar } from '@store/components/front-navbar/front-navbar';

@Component({
  selector: 'app-store-front-layout',
  imports: [FrontNavbar, RouterOutlet],
  templateUrl: './store-front-layout.html',
  styles: ``,
})
export class StoreFrontLayout {

}
