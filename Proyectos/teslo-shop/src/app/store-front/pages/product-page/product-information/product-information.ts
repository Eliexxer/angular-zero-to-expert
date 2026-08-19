import { Component, input } from '@angular/core';
import { ProductCarousel } from '@product/components/product-carousel/product-carousel';
import { Product } from '@product/interfaces/product.interface';

@Component({
  selector: 'product-information',
  imports: [ProductCarousel],
  templateUrl: './product-information.html',
  styles: ``,
})
export class ProductInformation {
  product = input.required<Product>();
}
