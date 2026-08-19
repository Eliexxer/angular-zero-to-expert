import { Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { environment } from '@environments/environment';
import { ProductCard } from '@product/components/product-card/product-card';
import { Products } from '@product/services/products.service';

const baseUrl = environment.baseUrl;

@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  templateUrl: './home-page.html',
  styles: ``,
})
export class HomePage {

  productsService = inject(Products);

  productsResource = rxResource({
    params: () => ({}),
    stream: ({ params }) => {
      return this.productsService.getProducts({limit:9});
    }
  })

  products = computed(() => this.productsResource.value()?.products ?? []);


}
