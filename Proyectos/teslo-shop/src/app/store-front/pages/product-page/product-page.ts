import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Products } from '@product/services/products.service';
import { ProductInformation } from './product-information/product-information';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [ProductInformation],
  templateUrl: './product-page.html',
  styles: ``,
})
export class ProductPage {
  productService = inject(Products);
  activatedRoute = inject(ActivatedRoute);

  productIdSlug = this.activatedRoute.snapshot.params['idSlug'];
  idSlug = input.required<string>()

  productResource = rxResource({
    params: () => ({idSlug: this.idSlug()}),
    stream: ({ params }) => {
      return this.productService.getProductByIdSlug(params.idSlug)
    }
  })
}
