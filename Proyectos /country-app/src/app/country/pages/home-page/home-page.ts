import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../../shared/components/footer.component/footer.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
})
export class HomePage {}
