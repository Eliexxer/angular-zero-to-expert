import { Component, computed, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductCard } from '@product/components/product-card/product-card';
import { Products } from '@product/services/products.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCard],
  templateUrl: './gender-page.html',
  styles: ``,
})
export class GenderPage {
  productsService = inject(Products);

  route = inject(ActivatedRoute);
  gender = toSignal(this.route.params.pipe(
    map(({gender}) => gender)
  ))

  productsResource = rxResource({
    params: () => ({gender: this.gender()}),
    stream: ({ params }) => {
      return this.productsService.getProducts({limit:9, gender:params.gender});
    }
  })

  products = computed(() => this.productsResource.value()?.products ?? [])
}
