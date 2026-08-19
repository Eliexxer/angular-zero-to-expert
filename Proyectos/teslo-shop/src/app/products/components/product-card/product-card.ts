import { SlicePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '@environments/environment.development';
import { Product } from '@product/interfaces/product.interface';
import { ProductImagePipe } from '@product/pipes/product-image-pipe';

@Component({
  selector: 'product-card',
  imports: [RouterLink, ProductImagePipe],
  templateUrl: './product-card.html',
  styles: ``,
})
export class ProductCard {
  product = input.required<Product>();
  imageUrl = computed(() => {
    const image = this.product().images[0];
    if (!image) return 'assets/no-image.jpg';
    return `${environment.baseUrl}/files/product/${image}`;
  });
}
